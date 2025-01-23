import { z } from "zod";
import { passwordValidation } from "@schemas/signUpSchema";

const changePasswordSchema = z.object({
  password: passwordValidation,
  confirmPassword: passwordValidation,
});

export default changePasswordSchema;
