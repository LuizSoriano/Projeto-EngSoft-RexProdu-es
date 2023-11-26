import express from 'express'
import clienteController from '../controllers/cliente.controller.js'

const router = express.Router()

router.get('/:email/:senha', clienteController.logarCliente)
router.get('/:cpf', clienteController.getUmCliente)
router.post('', clienteController.criaCliente)
router.put('/:cpf', clienteController.alteraCliente)

export default router