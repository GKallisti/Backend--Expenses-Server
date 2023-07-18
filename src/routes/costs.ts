import { Router } from "express";
import { createUser, getUsers, getUsersByDni } from "../controllers/costController";

const router = Router();

router.post('/', createUser)
router.get('/', getUsers)
router.get('/:dni', getUsersByDni)

export default router