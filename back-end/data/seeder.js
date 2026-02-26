import mongoose from "mongoose";
import dotenv from "dotenv";
import products from "./products.js";
import productModel from "../models/productModel.js";

dotenv.config({ path: "../.env" });  // 👈 important

await mongoose.connect(process.env.MONGODB_URI);

const importData = async () => {
  try {
    await productModel.deleteMany();
    await productModel.insertMany(products);
    console.log("Data Seeded Successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();