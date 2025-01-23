import { decodeJwt } from "jose"; // Import functions from the jose library

// Function to check if a JWT token is valid
function isValidToken(token: string) {
  // Step 1: Check if the token is in the correct format (3 parts)
  if (!token || token.split(".").length !== 3) {
    return false; // Invalid JWT format
  }
  try {
    // Step 2: Decode the JWT (no signature verification yet)
    const decoded = decodeJwt(token);

    // Step 3: Check if the token is expired (has "exp" claim)
    if (decoded.exp && decoded.exp < Date.now() / 1000) {
      return false; // Token is expired
    }
    return true; // Token is valid
  } catch {
    return false;
  }
}

export default isValidToken;
