import { expect, test } from "vitest";
import { getFoods } from "./getFoods";

test("adds 1 + 2 to equal 3", () => {
  expect(getFoods().length).toBe(11);
});
