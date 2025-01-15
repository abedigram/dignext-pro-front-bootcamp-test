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
