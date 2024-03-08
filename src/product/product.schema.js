import mongoose from "mongoose";

export const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please enter a product name"]
    },
    quantity: {
        type: Number,
        required: [true,"Please enter quantity"]
    }
})
