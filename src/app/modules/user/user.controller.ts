import { NextFunction, Request, Response } from 'express'
import { createUserToDB, getSingleUserByID, getUser } from './user.service'

export const createUser = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const data = req.body
	console.log('From controller: ', data)
	const user = await createUserToDB(data)

	res.status(200).json({
		status: true,
		data: user,
	})
}

export const getUsers = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const users = await getUser()
	res.status(200).json({
		status: true,
		data: users,
	})
}
export const getSingleUser = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const { id } = req.params
	const user = await getSingleUserByID(id)
	res.status(200).json({
		status: true,
		data: user,
	})
}

/**
 * route > controller => service
 */
