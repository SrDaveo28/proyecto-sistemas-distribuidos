import { connect } from 'mongoose'

export async function dbConnection () {
  await connect(`${process.env.MONGO_URI}`)
  console.log('MongoDB connected')
}
