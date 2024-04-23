import { IProduct } from './products.interface'
import Product from './products.model'

// post a product
export const createProductToDB = async () => {
	const product = new Product({
		name: 'Book-001',
		availability: true,
		cover: 'cover.png',
		quantity: 500,
	})

	// database query
	await product.save()
	return product
}

// get all products from db as an array
export const getAllProducts = async (): Promise<IProduct[]> => {
	const products = await Product.find()
	return products
}

// get single product
export const getSingleProductByID = async (
	payload: string | null,
): Promise<IProduct | null> => {
	const result = await Product.findById(payload)
	return result
}
