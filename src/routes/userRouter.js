import { Router } from "express";
import { getUsers, sendDocuments} from "../controllers/userControler.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.post('/:uid/documents', sendDocuments)



export default userRouter;









// userRouter.get("/:id", getUserById); 
// userRouter.post("/", createUser); 
// userRouter.put("/:id", updateUser); 
// userRouter.delete("/:id", deleteUser); 


// createUser, updateUser, deleteUser, getUserById