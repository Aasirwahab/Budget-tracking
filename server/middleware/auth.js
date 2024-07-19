const JWT = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.cookies.authToken; // Retrieve token from cookie

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded user to the request
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
  
};


module.exports = authMiddleware;
