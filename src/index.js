import dotenv from 'dotenv'
import express from 'express'
import mongoose, { get } from 'mongoose'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import messageModel from './models/menssages.js'
import indexRouter from './routes/index.Router.js'
import initializePassport from './config/passport/passport.js'
import { Server } from 'socket.io'
import { engine } from 'express-handlebars'
import { __dirname } from './path.js'
import {getProducts } from './controllers/productControler.js'

const app = express()
const PORT = 8080
dotenv.config()


//server
const server = app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})

// const io = new Server (server)


// conction DB
mongoose.connect(process.env.MONGO_BD_URL)
.then(() => console.log("db is conect "))
.catch(e => console.log(e))


//MIDDLEWARES
app.use(express.json())
app.use(session({
    secret:"coderSecret",   // secret: process.env.SESSION_SECRET,
    resave: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_BD_URL,
        ttl: 60 * 60
    }),
    saveUninitialized: true
}))
app.use(cookieParser("claveSecreta"))     //(process.env.COOKIE_SECRET)
app.engine('handlebars', engine()) // confirguro para usar handlebars
app.set('view engine', 'handlebars')// confirguro para usar handlebars
app.set('views', __dirname + '/views')// aca digo donde se esta usando 

app.get("/", async (req,res) => {
    res.render("./templates/home", {
        title: "Non forsit",
        products : getProducts,
    })
})

initializePassport()
app.use(passport.initialize())
app.use(passport.session())


//Routes
app.use('/', indexRouter)



//Routes Cookies
app.get('/setCookie', (req, res) => {
    res.cookie('CookieCookie', 'Esto es una cookie :)', { maxAge: 3000000, signed: true }).send("Cookie creada")
})

app.get('/getCookie', (req, res) => {
    res.send(req.signedCookies)
})

app.get('/deleteCookie', (req, res) => {
    res.clearCookie('CookieCookie').send("Cookie eliminada")
    //res.cookie('CookieCokie', '', { expires: new Date(0) })
})

//Session Routes
app.get('/session', (req, res) => {
    console.log(req.session)
    if (req.session.counter) {
        req.session.counter++
        res.send(`Sos el usuario N° ${req.session.counter} en ingresar a la pagina`)
    } else {
        req.session.counter = 1
        res.send("Sos el primer usuario que ingresa a la pagina")
    }
})

app.get('/login', (req, res) => {
    const { email, password } = req.body

    if (email == "admin@admin.com" && password == "1234") {
        req.session.email = email
        req.session.password = password

    }
    console.log(req.session)
    res.send("Login")
})



// io.on('connection', async(socket)=>{
//     console.log("conecion con socket.io")

//     socket.on('mensaje',async (mensaje) =>{
//         try {
//             await messageModel.create(mensaje)
//             const mensajes = await messageModel.find()
//             io.emit('mensajeLogs', mensajes)
//         } catch (e) {
//             io.emit('mensajeLogs', e)
//         }
//     })
// })