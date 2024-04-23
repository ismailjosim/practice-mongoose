// Step-01: Create Interface

export interface IUser {
	name: {
		firstName: string
		middleName?: string
		lastName: string
	}
	email: string
	age: number
	avatar?: string
}

export interface IUserMethods {
	fullName(): string
}
