import { Router } from 'express';
import { AuthController } from './auth.controller';

const controller = new AuthController();
export const router = Router();

router.get('/github', controller.github);
router.post('/github/callback', controller.githubCallback);
