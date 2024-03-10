import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { Schema, model } from 'mongoose'
const app: Application = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World!')
})

app.get('/user', async (req: Request, res: Response) => {
	// Step-01: Create Interface
	interface IUser {
		name: string
		email: string
		age: number
		avatar?: string
	}
	// Step-02: Create Schema
	const userSchema = new Schema<IUser>({
		name: { type: String, required: true },
		email: { type: String, required: true },
		age: { type: Number, required: true },
		avatar: String,
	})
	// Step-03: Create model from schema
	const User = model<IUser>('User', userSchema)

	const user = new User({
		name: 'josim',
		email: 'ismailjosim@gmail.com',
		age: 26,
		avatar: 'imageurl',
	})
	// Step-04: Database Query
	await user.save()
	console.log(user)

	res.send(user)
})

export default app
