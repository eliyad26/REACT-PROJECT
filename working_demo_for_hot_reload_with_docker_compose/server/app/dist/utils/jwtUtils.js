// jwtUtils.ts
import { sign, verify } from "jsonwebtoken";
const secretKey = "project-team1";
export const generateToken = ({ email }) => {
    return sign({ email }, secretKey, { expiresIn: "1h" });
};
export const verifyToken = (token) => {
    try {
        const decoded = verify(token, secretKey);
        return decoded;
    }
    catch (error) {
        console.error("Error verifying token:", error);
        return null;
    }
};
//# sourceMappingURL=jwtUtils.js.map