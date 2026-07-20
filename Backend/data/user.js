import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true, trim:true }, // User name, not email address!
    email: { type: String, required: true, trim:true, unique: true },
    password: { tupe: String, minimum: 6, reqiured: true, trim: true},
    isAdmin: {type: Boolean, default: false},
},
{timestamps: { createdAt: "created_at", updatedAt: "updated_at" }}
);