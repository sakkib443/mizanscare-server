/**
 * One-time migration: convert all `role: "super-admin"` users to `role: "admin"`.
 * Run: npx ts-node src/scripts/migrateRolesSuperAdminToAdmin.ts
 */
import mongoose from "mongoose";
import config from "../app/config";
import { User } from "../app/modules/user/user.model";

async function migrate() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        // Use the underlying collection so the (now-removed) "super-admin" enum
        // doesn't reject the read/update.
        const coll = User.collection;

        const before = await coll.countDocuments({ role: "super-admin" });
        console.log(`Users with role "super-admin": ${before}`);

        if (before === 0) {
            console.log("Nothing to migrate. Done.");
        } else {
            const result = await coll.updateMany(
                { role: "super-admin" },
                { $set: { role: "admin" } }
            );
            console.log(`✅ Migrated ${result.modifiedCount} users to role "admin".`);
        }

        const totals = await User.aggregate([
            { $group: { _id: "$role", count: { $sum: 1 } } },
        ]);
        console.log("\nFinal role counts:");
        for (const t of totals) console.log(`  ${t._id}: ${t.count}`);

        await mongoose.disconnect();
        process.exit(0);
    } catch (err) {
        console.error("Migration failed:", err);
        process.exit(1);
    }
}

migrate();
