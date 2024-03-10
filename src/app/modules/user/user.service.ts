import { isValidObjectId } from 'mongoose'
import { IUser } from './user.interface'
import User from './user.model'

// get all user
export const getUser = async (): Promise<IUser[]> => {
	const users = await User.find()
	return users
}

// get single user
export const getSingleUserByID = async (
	payload: string | null,
): Promise<IUser | null> => {
	let user = null
	if (payload && isValidObjectId(payload)) {
		const result = await User.findById(payload, { name: 1, email: 1 }) // only get name and email
		if (result) {
			user = result.toObject() // convert result to plain JS object
		}
	}
	return user
}

// post data
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
	const user = new User(payload)
	// Step-04: Database Query
	await user.save()
	return user
}
