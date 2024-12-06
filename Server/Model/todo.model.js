const {Schema, model} = require("mongoose")

const schema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type :String
    },
    completed :{
        type: Boolean
    }
},{
    timestamps : true
})

const Todo = model("TodoLists", schema)

module.exports = Todo