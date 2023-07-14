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
    cart: [
      {
        id: "7",
        title: "White Gold Plated Princess",
        price: 9.99,
        description:
          "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        rating: {
          rate: 3,
          count: 400,
        },
        createdAt: "2023-07-15T00:12:32+05:30",
        updatedAt: "2023-07-15T00:12:32+05:30",
        qty: 1,
      },
      {
        id: "8",
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        description:
          "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        rating: {
          rate: 1.9,
          count: 100,
        },
        createdAt: "2023-07-15T00:12:33+05:30",
        updatedAt: "2023-07-15T00:12:33+05:30",
        qty: 1,
      },
      {
        id: "6",
        title: "Solid Gold Petite Micropave ",
        price: 168,
        description:
          "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        rating: {
          rate: 3.9,
          count: 70,
        },
        createdAt: "2023-07-15T00:13:28+05:30",
        updatedAt: "2023-07-15T00:13:28+05:30",
        qty: 1,
      },
      {
        id: "11",
        title:
          "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price: 109,
        description:
          "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        category: "electronics",
        image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        rating: {
          rate: 4.8,
          count: 319,
        },
        createdAt: "2023-07-15T00:13:29+05:30",
        updatedAt: "2023-07-15T00:13:29+05:30",
        qty: 1,
      },
    ],
    username: "aakanksha0796",
    password: "123",
    name: { firstname: "aakanksha", lastname: "saini" },
  },
];
