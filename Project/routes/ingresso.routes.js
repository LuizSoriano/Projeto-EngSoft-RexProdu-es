import express from 'express'
import ingressoController from '../controllers/ingresso.controller.js'

const router = express.Router()

router.get('', ingressoController.getTodosIngressos)
router.get('/:id', ingressoController.getUmIngresso)
router.delete('/:id', ingressoController.excluiIngresso)
router.put('/:id', ingressoController.alteraIngresso)

export default router