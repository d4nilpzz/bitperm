import { BitPerm } from "./BitPerm.js";
export function requirePermission(requiredPerm) {
    return (req, res, next) => {
        const user = req.user;
        if (!user || typeof user.permission !== "number") {
            return res.status(401).json({ error: "Unauthorized" });
        }
        if (!BitPerm.has(user.permission, requiredPerm)) {
            return res.status(403).json({ error: "Forbidden" });
        }
        next();
    };
}
