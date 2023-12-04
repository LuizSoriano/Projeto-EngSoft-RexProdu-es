import express from 'express'
import clienteController from '../controllers/cliente.controller.js'

const router = express.Router()

router.get('/:email/:senha', clienteController.logarCliente)
router.get('/:cpf', clienteController.getUmCliente)
router.get('/busca/porid/:id', clienteController.getUmClienteID)
router.post('', clienteController.criaCliente)
router.put('/:id', clienteController.alteraCliente)
router.delete('/:id', clienteController.excluiCliente)

export default router