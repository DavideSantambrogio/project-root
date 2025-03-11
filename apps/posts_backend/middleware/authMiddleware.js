import jwt from "jsonwebtoken";
import User from "../../users_backend/models/User.js";

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Prende il token dopo "Bearer"
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decodifica il token

      req.user = await User.findById(decoded.id).select("-password"); // Salva l'utente nel req.user
      next();
    } catch (error) {
      res.status(401).json({ message: "Token non valido" });
    }
  } else {
    res.status(401).json({ message: "Non autorizzato, nessun token" });
  }
};

export default protect;