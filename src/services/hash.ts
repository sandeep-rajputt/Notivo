import bcrypt from "bcryptjs";

/**
 * Hashes the provided password.
 * @param password - Plain text password
 * @returns - Hashed password
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

/**
 * Verifies if a plain password matches the hashed password.
 * @param password - Plain text password
 * @param hashedPassword - Hashed password from the database
 * @returns - True if passwords match, otherwise false
 */
export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}
