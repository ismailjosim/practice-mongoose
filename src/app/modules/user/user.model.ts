import { Schema, model } from 'mongoose'
import { IUser } from './user.interface'

// Step-02: Create Schema
const userSchema = new Schema<IUser>({
	name: { type: String, required: true },
	email: { type: String, required: true },
	age: { type: Number, required: true },
	avatar: String,
})
// Step-03: Create model from schema
const User = model<IUser>('User', userSchema)

export default User
