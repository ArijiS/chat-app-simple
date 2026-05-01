import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const signup = async(req, res)=>{
    try{
        const { fullName, username, password, confirmPassword } = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({message: "Incorrect password"});
        }        
        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({message: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&size=128&background=random`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            profilePic: avatarUrl,
        });

        if(newUser){
            await newUser.save();
            generateToken(newUser._id, res);
            res.status(201).json({ // newUser is updated with the data from DB after newUser.save()
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            hashedPassword: newUser.password,
            profilePic: newUser.profilePic,
        });
        } else {
            res.status(400).json({error: "Invalid Input"})
        } }
    catch(err){
        console.log("Sign up controller error", err.message);
        res.status(500).json({error: "Internal server error"});
    }};

export const login = async(req, res)=>{
    try{
        const { username, password } = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect){
            res.status(400).json({error: "Invalid username or password >:"});            
        }

        generateToken(user._id, res);

        res.status(200).json({ 
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            hashedPassword: user.password,
            profilePic: user.profilePic,
        });
    }
    catch(err){
        console.log("Login controller error", err.message);
        res.status(500).json({error: "Internal server error"});
    }
};

export const logout = async(req, res)=>{
    try{
        res.cookie("token", "", {maxAge: 0});
        res.status(200).json({message: "User logged out successfully"});
    }
    catch(err){
        console.log("Logout controller error", err.message);
        res.status(500).json({error: "Internal server error"});
    }
};