import express from 'express'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
	console.log(`Server up at:${port}`)
})
