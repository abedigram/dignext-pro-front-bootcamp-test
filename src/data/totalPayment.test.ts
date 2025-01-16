import { expect, it } from "vitest";
import { totalPayment } from "./totalPayment";
import { Food } from "./types";

it("should sum all cart items prices", () => {
  expect.hasAssertions();
  
  //given
  const cart: Food[] = [{ name: "a", price: 3000, image: "c" }];

  //when
  const total = totalPayment(cart);

  //then
  expect(total).toBe(3000);
});


it('should return zero if nothing added to cart if user is pro', () =>{
  //given & when
  const total = totalPayment([],20000,true);
  //then
  expect(total).toBe(0);
})

it('should decrease total items price if account isPro', () =>{
  //given
  const cart: Food[] = [{ name: "a", price: 5000, image: "c" }];

  //when
  const total = totalPayment(cart,16000,true);

  //then
  expect(total).toBe(5750);
})

it('should not decrease shipping price if shipping price is zero',()=>{
  const cart: Food[] = [{ name: "a", price: 5000, image: "c" }];

  //when
  const total = totalPayment(cart,0,true);

  //then
  expect(total).toBe(4750);
})