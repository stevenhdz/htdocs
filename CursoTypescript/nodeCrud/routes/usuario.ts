import { Router } from 'express'
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from '../controllers/usuario';
import { validateId } from '../middlewares/validate';

const router = Router();

router.get('/', getUsuarios)
router.get('/:id', getUsuario)
router.post('/', postUsuario)
router.put('/:id', putUsuario)
router.delete('/:id', [validateId], deleteUsuario)

export default router;