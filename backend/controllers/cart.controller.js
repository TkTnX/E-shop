import Cart from "../models/cart.model.js";
export const getCart = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ message: "User not found!" });

    const cart = await Cart.findOne({ userId: userId }).populate(
      "products.product"
    );
    if (!cart) return res.status(404).json({ message: "Cart not found!" });

    cart.totalPrice = cart.products.reduce(
      (acc, c) => acc + c.product.price * c.quantity,
      0
    );

    await cart.save();

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

    const cart = await Cart.findOne({ _id: cartId }).populate(
      "products.product"
    );

    if (!cart) return res.status(404).json({ message: "Cart not found!" });

    const product = cart.products.find(
      (p) => p.product._id.toString() === productId
    );

    if (!product)
      return res.status(404).json({ message: "Product not found in cart!" });

    product.quantity = quantity;

    cart.totalPrice = cart.products.reduce(
      (acc, c) => acc + c.product.price * c.quantity,
      0
    );


    await cart.save();
    return res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const removeItemFromCart = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId)
      return res.status(400).json({ message: "Product not found!" });

    const userId = req.userId;
    if (!userId) return res.status(401).json({ message: "User not found!" });

    const cart = await Cart.findOne({ userId }).populate("products.product");
    if (!cart) return res.status(404).json({ message: "Cart not found!" });

    const product = cart.products.find(
      (p) => p.product._id.toString() === productId
    );

    if (!product)
      return res.status(404).json({ message: "Product not found in cart!" });

    cart.products = cart.products.filter(
      (p) => p.product._id.toString() !== productId
    );

    cart.totalPrice = cart.products.reduce(
      (acc, p) => acc + p.product.price * p.quantity,
      0
    );

    await cart.save();

    return res.status(200).json({ message: "Product removed from cart!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const addToCart = async (req, res) => {
  try {
    const productBody = req.body.product;
    if (!productBody)
      return res.status(400).json({ message: "Product not found!" });

    const userId = req.userId;
    if (!userId) return res.status(401).json({ message: "User not found!" });

    const cart = await Cart.findOne({ userId }).populate("products.product");
    if (!cart) return res.status(404).json({ message: "Cart not found!" });

    const product = cart.products.find(
      (p) => p.product._id.toString() === productBody._id
    );
    if (product)
      return res.status(400).json({ message: "Product already in cart!" });

    cart.products.push({ product: productBody._id, quantity: 1 });

    cart.totalPrice = cart.products.reduce(
      (acc, p) => acc + productBody.price,
      0
    );

    await cart.save();

    return res.status(200).json({ message: "Product added to cart!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
