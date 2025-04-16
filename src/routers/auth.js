import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUserSchema } from '../validation/auth.js';
import { registerUserController } from '../controllers/auth.js';
import { validateBody } from '../utils/validateBody.js';
import { loginUserSchema } from '../validation/auth.js';
import { LoginUserController } from '../controllers/auth.js';
const router = Router();
router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(LoginUserController),
);

export default router;
