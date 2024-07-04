import { Router } from "express";
import passport from "passport";
import { login, register, logout, sessionGithub, testJWT, sendEmailPassport, changePassword} from "../controllers/sessionControler.js";





const sessionRouter = Router()


sessionRouter.get('/login', passport.authenticate('login'), login)

sessionRouter.post('/register', passport.authenticate('register'), register)

sessionRouter.get('/github', passport.authenticate('github', { scope: ['user:email'] }), async (req, res) => {  })

sessionRouter.get('/githubSession', passport.authenticate('github'), sessionGithub)

// sessionRouter.get('/current', passport.authenticate('jwt', (req, res) =>{
//     console.log(req)
//     res.status(200).send("usuario logeuado")
// }))

sessionRouter.get('/logout', logout)

sessionRouter.get('/testJWT', passport.authenticate('jwt', {session: false}), testJWT)

sessionRouter.post('/sendEmailPassword', sendEmailPassport )

sessionRouter.post('/reset-password/:token', changePassword )


export default sessionRouter