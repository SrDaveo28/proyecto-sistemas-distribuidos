import { Router } from 'express'
import { health, createPhoto, getPhotos } from '../controllers/photo.controller'
import multer from '../libs/multer'

const router = Router()

router.route('/health').get(health)

router.route('/create')
  .post(multer.single('image'), createPhoto)
  .get(getPhotos)

export default router
