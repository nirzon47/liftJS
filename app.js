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

app.get('/q2', (req, res) => {
	res.sendFile(__dirname + '/public/html/qTwo.html')
})

app.get('/q3', (req, res) => {
	res.sendFile(__dirname + '/public/html/qThree.html')
})

app.get('/q4', (req, res) => {
	res.sendFile(__dirname + '/public/html/qFour.html')
})

app.get('/q5', (req, res) => {
	res.sendFile(__dirname + '/public/html/qFive.html')
})

app.get('/q6', (req, res) => {
	res.sendFile(__dirname + '/public/html/qSix.html')
})

app.get('/q7', (req, res) => {
	res.sendFile(__dirname + '/public/html/qSeven.html')
})

app.get('/congrats', (req, res) => {
	res.sendFile(__dirname + '/public/html/congrats.html')
})

app.listen(port, () => {
	console.log(`Server up at:${port}`)
})
