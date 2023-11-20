import express from 'express'
import showController from '../controllers/show.controller.js'

const router = express.Router()

router.get('', showController.getTodosShows)
router.get('/:id', showController.getUmShow)
router.delete('/:id', showController.excluiShow)
router.put('/:id', showController.alteraShow)

export default router