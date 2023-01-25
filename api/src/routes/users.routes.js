const { Router, response } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController")
const UserAvatarController = require("../controllers/UserAvatarController")

const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER)

function myMiddleware(request, response, next){
    console.log("passou no middleware")

    next()
}

const usersController = new UsersController()
const userAvatarController = new UserAvatarController();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

usersRoutes.post("/",myMiddleware, usersController.create)
usersRoutes.put("/", ensureAuthenticated, usersController.update)
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);

module.exports = usersRoutes;