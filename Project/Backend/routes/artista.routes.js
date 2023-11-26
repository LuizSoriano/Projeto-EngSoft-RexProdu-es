import express from 'express'
import artistaController from '../controllers/artista.controller.js'

const router = express.Router()

router.get('', artistaController.getTodosArtistas)
router.get('/:cnpj', artistaController.getUmArtista)
router.post('', artistaController.criaArtista)
router.delete('/:cnpj/:nome', artistaController.excluiArtista)
router.put('/:cnpj', artistaController.alteraArtista)

export default router