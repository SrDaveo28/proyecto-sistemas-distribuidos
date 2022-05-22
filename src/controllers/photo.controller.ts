import { Request, Response } from 'express'

export function health (req: Request, res: Response): Response {
  return res.send('Server Running')
}

export function createPhoto (req: Request, res: Response) {
  const { body } = req
  console.log(body)

  return res.json({
    message: 'Photo successfully saved'
  })
}

export function getPhotos (req: Request, res: Response) {
  return res.json({
    message: 'Photo successfully saved'
  })
}
