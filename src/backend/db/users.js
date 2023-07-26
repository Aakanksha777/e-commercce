// import { v4 as uuid } from "uuid";
// import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    id: 11,
    email: "surya@gmail.com",
    cart: [],
    addresses: [
      {
        id: 1,
        firstname: "",
        lastname: "",
        phone: "",
        address_line1: "456 Oak Avenue",
        address_line2: "Apt 7C",
        city: "Springfield",
        state: "Illinois",
        postal_code: "62701",
        country: "United States",
      },
    ],
    latestOrder: {},
    username: "surya0796",
    password: "123",
    name: { firstname: "surya", lastname: "saini" },
  },
  {
    id: 12,
    email: "aakanksha@gmail.com",
    cart: [],
    latestOrder: {},
    addresses: [],
    username: "aakanksha0796",
    password: "123",
    name: { firstname: "aakanksha", lastname: "saini" },
  },
];
