import Favorite from "../models/favorite.model.js";

export const getFavorites = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ message: "User not found!" });

    const favorites = await Favorite.find({ user: userId }).populate("product");
    console.log(favorites);
    return res.status(200).json(favorites);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const switchFavorites = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ message: "User not found!" });

    const productId = req.params.productId;
    if (!productId)
      return res.status(400).json({ message: "Product not found!" });

    const favoriteItem = await Favorite.findOne({
      user: userId,
      product: productId,
    });

    if (favoriteItem) {
      await Favorite.deleteOne({ _id: favoriteItem._id });
      return res.status(200).json({ message: "Removed from favorites!" });
    } else {
      await Favorite.create({ user: userId, product: productId });
      return res.status(200).json({ message: "Added to favorites!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
