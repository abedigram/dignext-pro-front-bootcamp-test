import { Food } from "./types";

export const totalPayment = (
  cart: Food[] = [],
  shippingPrice: number = 0,
  isPro: boolean = false
): number => {
  if(cart.length == 0){
    return 0;
  }
  let result = 0;
  cart.forEach((item) => {
    result += item.price;
  });
  if(isPro){
    result = result * 0.95
    result += Math.max(0,shippingPrice-15000) 
  }else{
    result += shippingPrice
  }


  return result;
};
