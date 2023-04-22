import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app: Express = express()
app.use(cors())
dotenv.config()
const port: number = parseInt(process.env.DCMERN_API_PORT || '3001')

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!')
})

app.get('/db', async (req: Request, res: Response) => {
  try {
    await mongoose.connect(process.env.DCMERN_DB_URL || '')
    res.send('Connected to DB.')
  } catch (e) {
    res.send(`Error connecting to DB: ${e}`)
  }
})

app.listen(port, () => {
  console.log(`DCMERN-API listening on port ${port}`)
})
