import nodemailer from 'nodemailer'




const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:"agusbertoli@gmail.com",
        pass: "eokm vxku yzts nejr" //CONTRASEÑA DE MI AP GENERADA
    }
})

 export const sendEmailChangePassword = async (email, linkChagePassword) =>{
    const mailOption = {
        from: "agusbertoli@gmail.com",
        to: email,
        subject: "recuperacion de contraseña",
        text: 
        `
            Haz click en el siguiente enlace para cambiar tu contraseña: ${linkChagePassword}
        `,
        
        html: 
        `
            <p> Haz click aqui para cambiar tu contraseña: </p> <button> <a href=${linkChagePassword}>Cambiar contraseña</a> </button>      
        `,

    }

    transporter.sendMail(mailOption, (error, info) =>{
        if(error){
            console.log("Error al enviar correo de cambio de contraseña", (error))
        } else {
            console.log("Correo enviado correctamente", info.response)
        }
    })
}
