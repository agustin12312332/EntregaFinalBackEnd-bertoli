
const socket=io()


const chatBox = document.getElementById('chatBox')
const messageLogs = document.getElementById('messageLogs')
let user

//validacion usuario "SweetAlert"
Swal.fire({
    title: "inicio de sesion",
    input: "text",
    text: "por favor ingrese su nombre de usuario para continuar",
    inputValidator: (valor) =>{
        return !valor && 'ingrese un valor valido'
    },
    allowOutsideClick: false
}).then(resultado =>{
    user = resultado.value
    console.log(user)
})

chatBox.addEventListener('keyup', (e) =>{
    if(e.key === 'Enter') {
        if(chatBox.value.trim().length >0) {
            socket.emit('mensaje', {usuario: user, mensaje: chatBox.value})
            chatBox.value = ""
        }
    }
})


socket.on('mensajeLogs', info =>{
    messageLogs.innerHTML = ""
    info.forEach(mensaje => {
        messageLogs.innerHTML += `<p>${mensaje.usuario} dice: ${mensaje.mensaje}</p>`
    });
})