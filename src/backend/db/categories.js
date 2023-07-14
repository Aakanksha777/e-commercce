import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "electronics",
    photos: [],
  },
  {
    _id: uuid(),
    categoryName: "women's clothing",
    photos: [],
  },
  {
    _id: uuid(),
    categoryName: "men's clothing",
    photos: [],
  },
  {
    _id: uuid(),
    categoryName: "jewelery",
    photos: [],
  },
];
