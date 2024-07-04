import { Router } from "express";
import passport from "passport";
import {createCart, getCart, insertProductCart, createTicker} from "../controllers/cartControler.js"




const cartRouter = Router()


cartRouter.post('/',createCart)

cartRouter.get('/:cid',getCart)

cartRouter.post('/:cid/:pid', passport.authenticate('jwt', {session:false}), insertProductCart)

cartRouter.post('/purchase/:cid', passport.authenticate('jwt', {session:false}), createTicker)

export default cartRouter