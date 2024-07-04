import { Schema, model } from "mongoose";

const ticketSchema =  new Schema({
    code: {
        type: String, 
        require: true 
    },

//almacena fecha y hora exacta
    purchase_datetime:{
       type: Date, 
       defoult: Date.now
    },
//monto
    amount: {
        type: Number,
        required: true
    },
//comprador 
    purchase: {
        type: String,
        required: true
    },

    products: {
        type: Object
    }
})

 const ticketModel = model ('ticket', ticketSchema)

   export default ticketModel

// formato o schema de mi ticket