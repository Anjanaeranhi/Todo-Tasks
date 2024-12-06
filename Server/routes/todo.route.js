const {Router} = require("express")
const {createTodo, readTodo, updateTodo, deleteTodo} = require("../controllers/todo.operations")

const TodoRouter = Router()

TodoRouter.post("/todo", createTodo)
TodoRouter.get("/todo", readTodo)
TodoRouter.patch("/todo", updateTodo)
TodoRouter.delete("/todo", deleteTodo)

module.exports = {TodoRouter}