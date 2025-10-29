
import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
}, { timestamps: true })

const Category = mongoose.model("category",CategorySchema);

export default Category;