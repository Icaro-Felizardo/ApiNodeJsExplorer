const { Router, response } = require("express");

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()


function myMiddleware(request, response, next){
    console.log("passou no middleware")

    next()
}


const usersController = new UsersController()

usersRoutes.post("/",myMiddleware, usersController.create)

module.exports = usersRoutes;