import { NextFunction, Request, Response } from 'express'
import { createProductToDB, getAllProducts } from './products.service'

export const createProduct = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const product = await createProductToDB()
	res.status(200).json({
		status: true,
		data: product,
	})
}
export const getProducts = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const product = await getAllProducts()
	res.status(200).json({
		status: true,
		data: product,
	})
}
