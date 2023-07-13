import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "surya",
    lastName: "saini",
    email: "surya@gmail.com",
    password: "123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "7d1d42f2-5722-49aa-84e8-c7c79d530236",
    email: "surya123@gmail.com",
    password: "12345",
    createdAt: "2023-07-13T16:44:12+05:30",
    updatedAt: "2023-07-13T16:44:12+05:30",
    username: "surya123",
    firstname: "sry",
    lastname: "sain",
    confirmPassword: "12345",
    cart: [],
    wishlist: [],
    id: "3",
  },
];
