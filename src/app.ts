import express from 'express'
import cors from 'cors'
const app = express()

// middleware
app.use(cors())

app.get('/', (req, res) => {
	res.send('Hello World!')
})

export default app