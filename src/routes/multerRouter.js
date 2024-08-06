import { Router } from "express";
import {insertImg} from "../controllers/multerControler.js"
import {uploadDocs, uploadProducts, uploadProfile} from "../config/multer.js"

const multerRouter = Router()

multerRouter.post('/profiles',  uploadProfile.single('profile'), insertImg)
multerRouter.post('/docs',  uploadDocs.single('doc'), insertImg)
multerRouter.post('/products',  uploadProducts.single('product'), insertImg)

export default multerRouter