import express, { Application, Response } from 'express'
import cors from 'cors'
import userRoutes from './app/modules/user/user.route'
import productRoutes from './app/modules/products/products.route'
const app: Application = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_, res: Response) => {
	res.send('Mongoose Server is Ready to Use!')
})

// use all routes
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/product', productRoutes)

// route => controller => service

export default app
