import { Router } from "express";
import { singup, singin, profile} from "../controllers/auth.controller";
import { TokenValidation } from "../libs/validateToken";
const router = Router();


router.post('/singup', singup);
router.post('/singin', singin);
router.get('/profile',TokenValidation, profile); // con TokenValidation solo entra a la pagina si solo tiene token



export default router;