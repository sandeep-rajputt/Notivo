import { z } from "zod";

// Define the schema
const emailSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export default emailSchema;
