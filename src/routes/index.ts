import { Router } from 'express'
import { health, createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto } from '../controllers/photo.controller'
import multer from '../libs/multer'

const router = Router()

router.route('/health').get(health)

router.route('/create').post(multer.single('image'), createPhoto)

router.route('/photos').get(getPhotos)

router.route('/photos/:id').get(getPhoto)

router.route('/photos/:id').delete(deletePhoto)

router.route('/photos/:id').put(updatePhoto)

export default router
