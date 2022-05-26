import { Request, Response } from 'express'
import Photo from '../models/Photo'
import path from 'path'
import fs from 'fs-extra'

export function health (req: Request, res: Response): Response {
  return res.send('Server Running')
}

export async function createPhoto (req: Request, res: Response): Promise<Response> {
  const { title, description } = req.body
  const { file } = req
  const newPhoto = { title, description, imagePath: file?.path }

  const photo = new Photo(newPhoto)

  await photo.save()

  return res.json({
    message: 'Photo successfully saved',
    photo
  })
}

export async function getPhotos (req: Request, res: Response): Promise<Response> {
  const photos = await Photo.find()

  return res.json(photos)
}

export async function getPhoto (req: Request, res: Response): Promise<Response> {
  const { id } = req.params
  const photo = await Photo.findById(id)

  return res.json(photo)
}

export async function deletePhoto (req: Request, res: Response): Promise<Response> {
  const { id } = req.params

  const photo = await Photo.findByIdAndDelete(id)

  if (photo) {
    fs.unlink(path.resolve(photo.imagePath))
  }

  return res.json({
    message: 'Photo successfully deleted',
    photo
  })
}

export async function updatePhoto (req: Request, res: Response): Promise<Response> {
  const { id } = req.params
  const { title, description } = req.body
  const updatedPhoto = await Photo.findByIdAndUpdate(id, {
    title,
    description
  })
  return res.json({
    message: 'Successfully updated',
    updatedPhoto
  })
}
