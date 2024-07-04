import { Router } from "express";
import { getUsers} from "../controllers/userControler.js";

const userRouter = Router();

userRouter.get("/", getUsers);

// userRouter.get("/:id", getUserById); 
// userRouter.post("/", createUser); 
// userRouter.put("/:id", updateUser); 
// userRouter.delete("/:id", deleteUser); 

export default userRouter;

// createUser, updateUser, deleteUser, getUserById