import Router from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getContactsController,
  getContactsByIdController,
  addContactsController,
  upsertContactsController,
  patchContactsController,
  deleteContactsController,
} from '../controllers/contacts.js';
import { validateBody } from '../utils/validateBody.js';
import {
  contactAddSchema,
  contactUpdateSchema,
} from '../validation/contacts.js';

import { isValidId } from '../middlewares/isValidId .js';
const router = Router();

router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactId', isValidId, ctrlWrapper(getContactsByIdController));

router.post(
  '/',
  validateBody(contactAddSchema),
  ctrlWrapper(addContactsController),
);

router.put(
  '/:contactId', isValidId,
  validateBody(contactAddSchema),
  ctrlWrapper(upsertContactsController),
);

router.patch(
  '/:contactId', isValidId,
  validateBody(contactUpdateSchema),
  ctrlWrapper(patchContactsController),
);

router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactsController));

export default router;
