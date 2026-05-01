import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoutes = async (req, res, next) => {

    try{
        const token = req.cookies.token;

        if(!token){
            res.status(401).json({error: "Unauthorized - No token found"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            res.status(401).json({error: "Unauthorized or expired token"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            res.status(404).json({error: "No user found"});
        }

        req.user = user;
        next();

    }
    catch(error){
        console.log("Error in protect route middleware: ",error.message);
        res.status(500).json({error: "Internal server error"});
    };

};

export default protectRoutes;