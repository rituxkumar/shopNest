const admin = (req, res, next) => {
  console.log(req.user);
  console.log(req.user.role);
  
  
  if (req.user && req.user.role == "admin") {
     return next();
  } 
   return res.status(403).json({ message: "Access denied,admin only" });
  
};

module.exports = { admin };
