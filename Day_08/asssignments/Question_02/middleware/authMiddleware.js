

const authMiddleware = (req, res, next) => {
    try {
         const authToken = req.headers.authorization;

         if (!authToken) {
           return res.status(401).json({
             error: "Unauthorized access",
           });
         }

         const token = authToken.split(" ")[1];

         if (!token) {
           return res.status(401).json({
             error: "Invalid Token",
           });
         }

         if (token === "secret123") {
           return next();
         }

         return res.status(401).json({
           error: "Invalid Token",
         });
        
    } catch (error) {
        res.status(400).json({
            error : "Invalid Token"
        })
    }
}

module.exports = authMiddleware;