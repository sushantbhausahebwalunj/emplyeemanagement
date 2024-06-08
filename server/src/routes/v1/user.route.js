import Router from 'express';
import { getUserProfile, loginUser, updateAvatar, updateProfile } from '../../controllers/v1/user.controllers.js';
import {upload} from '../../middlewares/multer.middleware.js';
import { isUserLoggedIn } from '../../middlewares/user.auth.middleware.js';
import { acceptLeaveApplication } from '../../controllers/v1/user.leave.controller.js';



const UserRouter = Router();




UserRouter.route("/login").post (

    upload.none(),
    loginUser

)


UserRouter.route("/uploadAvatar").post (

    isUserLoggedIn,
    upload.single("avatar"),
    updateAvatar

) 



UserRouter.route("/updateProfile").post (

    isUserLoggedIn,
    upload.none(),
    updateProfile

)

UserRouter.route("/leaveApplication").post (

    isUserLoggedIn,
    upload.none(),
    acceptLeaveApplication

) 





export default UserRouter;



UserRouter.route("/getUserProfile").get(
    isUserLoggedIn,
    getUserProfile
)



export default UserRouter;

