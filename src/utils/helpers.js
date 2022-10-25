export const countSubtotal = (arr) => {
  let subtotal = 0;
  arr.forEach((item) => {
    subtotal += item.quantity * item.price;
  });
  return subtotal;
};
