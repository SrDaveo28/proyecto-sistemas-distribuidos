import { Schema, model } from 'mongoose'
import { IPhoto } from '../interfaces/IPhoto'

const schema = new Schema({
  title: String,
  description: String,
  imagePath: String
})

export default model<IPhoto>('Photo', schema)
