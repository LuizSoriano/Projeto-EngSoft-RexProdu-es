import express from 'express'
import eventoController from '../controllers/evento.controller.js'

const router = express.Router()

router.get('', eventoControlle.getTodosEventos)
router.get('/:id', eventoController.getUmEvento)
router.post('', eventoController.criaEvento)
router.delete('/:id', eventoController.excluiEvento)
router.put('/:id', eventoController.alteraEvento)

export default router