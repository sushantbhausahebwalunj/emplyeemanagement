import { UserModel } from "../../models/index.js";
import asyncHandler from "../../utils/asyncHandler.js";


const loginUser = asyncHandler(async(req, res) => {

    const { email, password } = req.body;
    console.log(req.body);

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            return res.status(400).json({ message: "Invalid password" });
        }

        
        

        
    } 
    
    catch (error) {
        
    }

   

});

const logoutUser = asyncHandler(async(req, res) => {});

const updateAvatar = asyncHandler(async(req, res) => {
    const { Email } = req.cookies;

    try {
        const user = await UserModel.findOne({ email: Email });

        if (req.file) {
            const { filename, path } = req.file;
            const newPath = path + filename;
            const avatar = await s3.uploadFile(newPath);
            user.avatar = avatar;
            await user.save();
            res.status(200).json({ message: "avatar updated" });
        }

        await user.findByIdAndUpdate(email, {});

        return res.status(200).json({ message: "avatar updated" });
    } catch (error) {
        res.status(400).send("User not found");
    }
});

const updateEmail = asyncHandler(async(req, res) => {});

const updateBio = asyncHandler(async(req, res) => {});

const updatePassword = asyncHandler(async(req, res) => {});

const acceptLeaveApplication = asyncHandler(async(req, res) => {});

const acceptDailyReport = asyncHandler(async(req, res) => {});

const getUserProfile = asyncHandler(async(req, res) => {});

const getUserDashboard = asyncHandler(async(req, res) => {});

export { loginUser };