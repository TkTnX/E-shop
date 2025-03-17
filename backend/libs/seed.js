import { PRODUCTS } from "../constants.js";
import Product from "../models/product.model.js";
import { connectDB } from "./connectDB.js";

connectDB();

const seedDB = async () => {
  const products = [];

  for (let i = 0; i < PRODUCTS.length; i++) {
    const product = new Product(PRODUCTS[i]);
    products.push(await product.save());
  }

  console.log("Database seeded successfully!");
  process.exit(0);
};

seedDB().catch((error) => {
  console.error("Error seeding database:", error);
  process.exit(1);
});
