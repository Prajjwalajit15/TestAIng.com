import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Prajjwal",
    lastName: "ajit",
    email: "Prajjwalajit@gmail.com",
    password: "test",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
