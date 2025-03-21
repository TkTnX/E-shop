import Cart from "../models/cart.model.js";
export const getCart = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ message: "User not found!" });

    const cart = await Cart.findOne({ userId: userId }).populate(
      "products.product"
    );
    if (!cart) return res.status(404).json({ message: "Cart not found!" });

    return res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const changeItemQuantity = async (req, res) => {
  try {
    const quantity = req.body.quantity;
    const productId = req.body.productId;
    const cartId = req.body.cartId;

    if (!quantity || !productId || !cartId)
      return res.status(400).json({ message: "All fields are required!" });

    const cart = await Cart.findOne({ _id: cartId });

    if (!cart) return res.status(404).json({ message: "Cart not found!" });

    const product = cart.products.find(
      (p) => p.product.toString() === productId
    );

    if (!product)
      return res.status(404).json({ message: "Product not found in cart!" });

    product.quantity = quantity;

    await cart.save();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
