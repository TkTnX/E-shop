export const calculateTotalPrice = (products) => {
  return products.reduce((acc, c) => {
    const hasDiscount = c.product.discount > 0;
    if (hasDiscount) {
      const discount = c.product.price * c.product.discount;
      return acc + (c.product.price - discount) * c.quantity;
    } else {
      return acc + c.product.price * c.quantity;
    }
  }, 0);
};
