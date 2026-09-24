/**
 * Update Writing Set with Image URLs
 * 
 * Run with: npx ts-node src/seeds/update-writing-images.ts
 */

import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { QuestionSet } from '../app/modules/questionSet/questionSet.model';

// Load environment variables
dotenv.config();

// MongoDB connection
const MONGODB_URI = process.env.DATABASE_URL || 'mongodb://localhost:27017/ielts';

async function updateWritingImages(): Promise<void> {
    try {
        // Connect to MongoDB
        console.log('🔌 Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Find the Writing Set
        const writingSet = await QuestionSet.findOne({ setId: 'WRITING_SET_001' });

        if (!writingSet) {
            console.log('❌ Writing Set not found');
            return;
        }

        console.log('📝 Found Writing Set:', writingSet.setId);

        // Update Task 1 with map image
        if (writingSet.writingTasks && writingSet.writingTasks.length > 0) {
            // Task 1 - Map Comparison
            writingSet.writingTasks[0].imageUrl = '/images/writing/task1_norbiton_maps.png';
            writingSet.writingTasks[0].imageUrls = ['/images/writing/task1_norbiton_maps.png'];

            console.log('✅ Task 1 image URL added');

            // Task 2 - Essay (optional image, mainly text-based)
            if (writingSet.writingTasks.length > 1) {
                writingSet.writingTasks[1].imageUrl = '/images/writing/task2_risk_taking.png';
                console.log('✅ Task 2 image URL added');
            }
        }

        // Save the updated document
        await writingSet.save();
        console.log('✅ Writing Set updated successfully!');

        // Verify the update
        const updatedSet = await QuestionSet.findOne({ setId: 'WRITING_SET_001' });
        if (updatedSet && updatedSet.writingTasks) {
            console.log('\n📊 Updated Tasks:');
            updatedSet.writingTasks.forEach((task, index) => {
                console.log(`  Task ${index + 1}:`);
                console.log(`    - Type: ${task.taskType}`);
                console.log(`    - SubType: ${task.task1SubType || task.task2SubType || 'N/A'}`);
                console.log(`    - Image URL: ${task.imageUrl || 'No image'}`);
            });
        }

    } catch (error) {
        console.error('❌ Error updating images:', error);
    } finally {
        await mongoose.disconnect();
        console.log('\n🔌 Disconnected from MongoDB');
    }
}

// Run the update
updateWritingImages()
    .then(() => {
        console.log('\n✨ Done!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Fatal error:', error);
        process.exit(1);
    });
