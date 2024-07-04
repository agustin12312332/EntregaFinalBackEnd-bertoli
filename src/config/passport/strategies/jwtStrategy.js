import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { userModel } from "../../../models/user.js";



const cookieExtractor = req =>{
    console.log(req.cookies)
// {} no hay cookies != esta cookie no exite
// si existe cookies, asigno mi cookie en especifico 
    const token = req.cookies ? req.cookies.jwtCookie : {}
    console.log(token)
    return token
}

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    //jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() esperar el token de JWT desde la peticion
    //jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]) consultando desde las cookies
    secretOrKey: "coder" //process.env.JWT_SECRET
   
}

export const strategyJwt = new JwtStrategy(jwtOptions, async (payload, done)=>{
    try {
         
        const user = await userModel.findById(payload.user._id)
        if (!user){
            return done(null, false)
        }
        return done(null, user)
    } catch (e) {
        done(e, null)
    }
})