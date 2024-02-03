import { z } from "zod";

// Creating Object Schema
const signUpSchema = z.object({
  name: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Name must be at least 3 Char" })
    .max(255, { message: "Name must be more than 255 char" }),

  doctorname: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Name must be at least 3 Char" })
    .max(255, { message: "Name must be more than 255 char" }),

  disease: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Name must be at least 3 Char" })
    .max(255, { message: "Name must be more than 255 char" }),

  address: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Name must be at least 3 Char" })
    .max(255, { message: "Name must be more than 255 char" }),
  password: z
    .string({ required_error: "Password is Required" })
    .trim()
    .min(7, { message: "password must be at least 6 Char" })
    .max(1024, { message: "Name must be more than 1024 char" }),
});

export default signUpSchema;
