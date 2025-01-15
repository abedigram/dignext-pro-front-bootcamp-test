import { Food } from "./types";

const foods = import.meta.glob("/src/assets/foods/*.png", {
  query: "?url",
  import: "default",
});

export function getFoods(): Food[] {
  return Object.keys(foods).map((food) => ({
    name: food.match(/[\u0600-\u06FF\s]+/)?.[0] ?? "",
    price: (food.match(/[\u0600-\u06FF\s]+/)?.[0] ?? "").length * 1000,
    image: food,
  }));
}
