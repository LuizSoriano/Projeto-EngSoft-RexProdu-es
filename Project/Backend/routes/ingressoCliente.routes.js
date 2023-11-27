import express from 'express'
import ingressoClienteController from '../controllers/ingressoCliente.controller.js'

const router = express.Router()

router.post('', ingressoClienteController.criaIngressoCliente)

export default router