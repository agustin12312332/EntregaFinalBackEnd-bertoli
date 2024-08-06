import { userModel } from "../models/user.js";


export const getUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        res.status(200).send(users)
    } catch (e) {
        res.status(500).send("Error al consultar users: ", e)
    }

}



export const sendDocuments = async (req,res) => {
     try {
        const {uid} = req.params
        const newDocs = req.body
        const user = await userModel.findByIdAndUpdate(uid, { 
            $push: { 
                documents: { 
                    $each: newDocs
                }
            }
    }, {new: true})

        if(!user){
            res.status(404).send("Usuario no encontrado")
        }else{
            res.status(200).send(user)
        }
     } catch (e) {
        res.status(500).send(e)
     }
}

export const imagesProds = (req, res) => {
    
}




// export const getUsers = async (req, res) => {
//     try {
//         const users = await userModel.find().populate('cart_id');
//         res.status(200).send(users);
//     } catch (e) {
//         res.status(500).send("Error al consultar usuarios: " + e.message);
//     }
// };

// export const getUserById = async (req, res) => {
//     try {
//         const user = await userModel.findById(req.params.id_).populate('cart_id');
//         if (!user) {
//             return res.status(404).send("Usuario no encontrado");
//         }
//         res.status(200).send(user);
//     } catch (e) {
//         res.status(500).send("Error al consultar usuario: " + e.message);
//         console.log(e)
//     }
// };

// export const createUser = async (req, res) => {
//     try {
//         const newUser = await userModel.create(req.body);
//         res.status(201).send(newUser);
//     } catch (e) {
//         res.status(500).send("Error al crear usuario: " + e.message);
//     }
// };

export const updateUser = async (req, res) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('cart_id');
        if (!updatedUser) {
            return res.status(404).send("Usuario no encontrado");
        }
        res.status(200).send(updatedUser);
    } catch (e) {
        res.status(500).send("Error al actualizar usuario: " + e.message);
    }
};

// export const deleteUser = async (req, res) => {
//     try {
//         const deletedUser = await userModel.findByIdAndDelete(req.params.id);
//         if (!deletedUser) {
//             return res.status(404).send("Usuario no encontrado");
//         }
//         res.status(200).send("Usuario eliminado");
//     } catch (e) {
//         res.status(500).send("Error al eliminar usuario: " + e.message);
//     }
// };



