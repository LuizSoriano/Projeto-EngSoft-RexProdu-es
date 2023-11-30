import express from 'express'
import ingressoController from '../controllers/ingresso.controller.js'

const router = express.Router()

router.get('', ingressoController.getTodosIngressos)
router.get('/:idEvento', ingressoController.getUmIngresso)
router.delete('/:id', ingressoController.excluiIngresso)

export default router