import { Router } from 'express';
import AuthController from '../controllers/authController';

const router = Router();
const authController = new AuthController();

export function setRoutes(app: Router) {
    app.post('/signup', authController.signup.bind(authController));
    app.post('/login', authController.login.bind(authController));
}

export default router;