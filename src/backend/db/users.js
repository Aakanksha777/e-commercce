// import { v4 as uuid } from "uuid";
// import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: 11,
    email: "surya@gmail.com",
    cart: [],
    username: "surya0796",
    password: "123",
    name: { firstname: "surya", lastname: "saini" },
  },
  {
    _id: 12,
    email: "aakanksha@gmail.com",
    cart: [],
    username: "aakanksha0796",
    password: "123",
    name: { firstname: "aakanksha", lastname: "saini" },
  },
];
