import { z } from "zod";

export const passwordValidation = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .max(20, "Password must not exceed 20 characters")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d$@$!%*?.&]{8,20}$/,
    "Password must contain at least one lowercase, one uppercase, and one number"
  );

export const nameValidation = z
  .string()
  .min(3, "Name must be at least 3 characters long")
  .max(20, "Name must not exceed 20 characters")
  .regex(/^[a-zA-Z]+$/, "Only alphabets are allowed");

const signUpSchema = z.object({
  name: nameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: passwordValidation,
  confirmPassword: passwordValidation,
});

export default signUpSchema;
