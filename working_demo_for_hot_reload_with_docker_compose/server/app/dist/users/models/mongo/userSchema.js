import mongoose, { Schema } from "mongoose";
export const UserSchema = new Schema({
    _id: {
        type: String,
        required: false, // Optional, likely auto-generated
    },
    email: {
        type: String,
        required: true,
        minLength: 5,
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
    },
    name: {
        type: String,
        required: true,
    },
    fname: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    availability: {
        type: String,
        enum: ["morning", "noon", "evening"],
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    },
});
export const User = mongoose.model("user", UserSchema);
//# sourceMappingURL=userSchema.js.map