import multer from "multer";


const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(nul, 'src/public/img')
    },
    filename: (req,file,cb) =>{
        cb(nullm `${Date.now()}${foñe.originalname}`)
    }
})


const upload = multer ({storage: storage})

export default upload