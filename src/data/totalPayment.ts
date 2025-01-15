import { Food } from "./types";

export const totalPayment = (
  cart: Food[] = [],
  shippingPrice: number = 0,
  isPro: boolean = false
): number => {
  let result = 0;
  cart.forEach((item) => {
    result += item.price;
  });

  return result;
};
