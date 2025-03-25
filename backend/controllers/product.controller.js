import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const filters = req.query;
    const findBy = {};
    if (filters.discount === "true") findBy.discount = { $gt: 0 };
    if (filters.rating) findBy.rating = { $gte: filters.rating };
    if (filters.cat) findBy.category = filters.cat;
    if (filters.q) findBy.title = { $regex: filters.q, $options: "i" };

    const products = await Product.find(findBy);
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "Id is required!" });

    const product = await Product.findById(id);
    if (!product)
      return res.status(404).json({ message: "Product not found!" });

    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
