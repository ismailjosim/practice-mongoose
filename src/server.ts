import mongoose from 'mongoose'
import app from './app'

const port = process.env.PORT || 5000

async function dbConnect() {
	try {
		await mongoose.connect('mongodb://localhost:27017/practice-mongoose')
		console.log('Database connect Successfully!')
	} catch (error) {
		console.log(error)
	}
}
dbConnect()

app.listen(port, () => {
	console.log(`app listening on port ${port}`)
})
