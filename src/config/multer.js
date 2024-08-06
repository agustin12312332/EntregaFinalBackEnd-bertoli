import multer from "multer";
import { __dirname } from "../path.js"

const storageProducts = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(nul, `${__dirname}/public/img/products`)
    },
    filename: (req,file,cb) =>{
        cb(nullm `${Date.now()}${file.originalname}`)
    }
})

const storageDocs = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(nul, `${__dirname}/docs`)
    },
    filename: (req,file,cb) =>{
        cb(nullm `${file.originalname}`)
    }
})

const storageProfile = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(nul, `${__dirname}/public/img/profiles`)
    },
    filename: (req,file,cb) =>{
        cb(nullm `${file.originalname}`)
    }
})






export const uploadProducts = multer ({storage: storageProducts})
export const uploadDocs = multer ({storage: storageDocs})
export const uploadProfile  = multer ({storage: storageProfile})
