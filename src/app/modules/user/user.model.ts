import { Model, Schema, model } from 'mongoose'
import { IUser, IUserMethods } from './user.interface'

type UserModel = Model<IUser, {}, IUserMethods>

// Step-02: Create Schema
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
	name: {
		firstName: {
			type: String,
			required: true,
		},
		middleName: {
			type: String,
			required: false,
		},
		lastName: {
			type: String,
			required: true,
		},
	},
	email: { type: String, required: true },
	age: { type: Number, required: true },
	avatar: String,
})

userSchema.method('fullName', function fullName() {
	return this.name.firstName + ' ' + this.name.lastName
})

// Step-03: Create model from schema
const User = model<IUser, UserModel>('User', userSchema)

export default User
