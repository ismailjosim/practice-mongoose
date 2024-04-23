import express from 'express'
import { createProduct, getProducts } from './products.controller'

const router = express.Router()

router.get('/', getProducts)
router.post('/create', createProduct)

export default router
