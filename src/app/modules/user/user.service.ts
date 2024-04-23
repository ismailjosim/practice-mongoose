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
	const result = await User.findById(payload)
	return result
}

// post data
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
	const user = new User(payload)
	// Step-04: Database Query

	await user.save() // build in instance method
	// Custom instance method
	user.fullName()

	return user
}
