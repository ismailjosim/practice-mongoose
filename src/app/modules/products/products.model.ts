import { IProduct } from './products.interface'
import { Schema, model } from 'mongoose'

//* create product Schema
const productSchema = new Schema<IProduct>({
	name: { type: String, required: true },
	availability: { type: Boolean, required: true },
	cover: String,
	quantity: Number,
})

//* Create Model using Schema
const Product = model<IProduct>('Product', productSchema)
export default Product
