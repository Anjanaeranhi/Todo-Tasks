const Todo = require("../Model/todo.model")

const List = []
const createTodo = async (request, response)=>{
    try{
        const { body } = request
        const result = await Todo.create(body)
        if(!result?._id){
            return response.status(400).send({status : "Failure", message: "Todo is not created"})
        }
        return response.status(201).send({status: "Success", message:"Todo Created", result})
    }
    catch(err){
        console.log(err);
        response.status(500).send({status : "Failure", message : "Internal server error"})
    }
}

const readTodo = async (request, response)=>{
    try{
        const result = await Todo.find()
        return response.status(200).send({status : "Success", message: "TodoList", result})
    }catch(err){
        console.log(err.message)
        return response.status(500).send({status : "Failure", message : "Internal server error"})
    }
}

const updateTodo = async (request, response)=>{
    try{
        const {id,...restData} = request.body
        const result = await Todo.updateOne({_id:id},{$set: {...restData}})
        if(!id){
            return response.status(400).send({status : "Failure", message: "Id is required"})
        }
        if(result?.matchedCount == 0){
            return response.status(400).send({status : "Failure", message: "Id doesn't match"})
        }
        return response.status(201).send({status: "Success", message:"Updated", result})
    }
    catch(err){
        console.log(err);
        return response.status(500).send({status : "Failure", message : "Internal server error"})
    }
    
}

const deleteTodo = async (request, response)=>{
    try{
        const {id} = request.body
        const result = await Todo.deleteOne({_id:id})
        if(!id){
            return response.status(400).send({status : "Failure", message: "Id is required"})
        }
        if(result?.deletedCount == 0){
            return response.status(400).send({status : "Failure", message: "Id doesn't match"})
        }
        return response.status(200).send({status:"success", message:"Deleted",result})
    }
    catch(err){
        console.log(err);
        return response.status(500).send({status : "Failure", message : "Internal server error"})
        
    }
}

module.exports = {createTodo, readTodo, updateTodo, deleteTodo}

