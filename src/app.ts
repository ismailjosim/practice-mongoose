import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRoutes from './app/modules/user/user.route'
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

// route => controller => service

export default app
