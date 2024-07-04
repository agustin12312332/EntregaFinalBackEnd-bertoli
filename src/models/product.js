
import {Schema, model} from 'mongoose'
import  paginate  from 'mongoose-paginate-v2'

const productSchma = new Schema({
    title:{
        type: String, 
        required: true, 
        index: true
}, 
    description: {
        type: String, 
        required: true
}, 
    price:{
        type: Number, 
        required: true
}, 
    stock:{
        type: Number, 
        required: true
}, 
    category: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
},
    code: {
        type: String,
        unique: true,
},
        thumbnail: {
            default:[]
},
})
productSchma.plugin(paginate)
const productModel = model('products', productSchma)

export default productModel