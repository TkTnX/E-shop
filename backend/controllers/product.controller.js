import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const filters = req.query;
    const findBy = {};

    if (filters.discount === "true") findBy.discount = { $gt: 0 };
    if (filters.rating) findBy.rating = { $gte: filters.rating };
    
    const products = await Product.find(findBy);
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
