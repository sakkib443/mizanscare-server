/**
 * One-time cleanup migration.
 *
 * Removes the deprecated student fields that were dropped from the
 * registration form, backend and schema:
 *   - nameBengali        (Full Name in Bengali)
 *   - examDate           (Exam Schedule)
 *   - paymentStatus      (Payment Information)
 *   - paymentAmount      (Payment Amount BDT)
 *   - paymentMethod      (Cash / bKash / ...)
 *   - paymentReference   (Payment Reference / TrxID)
 *   - paymentDate
 *
 * These fields are no longer written by the app, but existing documents
 * created before the change still carry them — this $unsets them so the
 * collection matches the new schema exactly.
 *
 * Usage (from the mizanscare-server folder):
 *   node remove-deprecated-student-fields.js
 *
 * Reads the connection string from DATABASE_URL (.env). Falls back to the
 * same cluster URL used by the other maintenance scripts in this repo.
 */
const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL =
    process.env.DATABASE_URL ||
    'mongodb+srv://sakib:NXvrDSl7qvqii0Uq@cluster0.mspodzi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const DEPRECATED_FIELDS = {
    nameBengali: '',
    examDate: '',
    paymentStatus: '',
    paymentAmount: '',
    paymentMethod: '',
    paymentReference: '',
    paymentDate: '',
};

mongoose
    .connect(DB_URL)
    .then(async () => {
        console.log('Connected to MongoDB');

        const result = await mongoose.connection.db
            .collection('students')
            .updateMany({}, { $unset: DEPRECATED_FIELDS });

        console.log(`\n✅ Cleaned ${result.modifiedCount} student document(s)`);
        console.log('Removed fields: ' + Object.keys(DEPRECATED_FIELDS).join(', ') + '\n');

        await mongoose.connection.close();
        process.exit(0);
    })
    .catch((err) => {
        console.error('Error:', err);
        process.exit(1);
    });
