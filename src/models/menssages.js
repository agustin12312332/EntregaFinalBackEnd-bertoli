import {Schema, model} from 'mongoose'

const messageSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: false
    },

    message: {
        type: String,
        required:true
    }
})


const messageModel = model("messages", messageSchema)

export default messageModel
