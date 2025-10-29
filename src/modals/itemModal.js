import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    //   required: true,
    },
    subcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subcategory",
    //   required: false,
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    //   required: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

const Items =  mongoose.model("product", productSchema);

export default Items;