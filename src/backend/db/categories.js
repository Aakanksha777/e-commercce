import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "electronics",
  },
  {
    _id: uuid(),
    categoryName: "women's clothing",
  },
  {
    _id: uuid(),
    categoryName: "men's clothing",
  },
  {
    _id: uuid(),
    categoryName: "jewelery",
  },
];
