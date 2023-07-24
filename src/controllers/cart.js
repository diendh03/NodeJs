import cart from "../model/cart";
import { cartSchema } from "../schemas/cart";
export const getAllCart = (req, res) => {
  const cart = cart.find();
};
export const getOneCartById = () => {};
export const createCart = () => {};
export const updateCart = () => {};
