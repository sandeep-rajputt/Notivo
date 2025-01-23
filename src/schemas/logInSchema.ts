import { z } from "zod";

const passwordValidation = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .max(20, "Password must not exceed 20 characters");

const logInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: passwordValidation,
});

export default logInSchema;
