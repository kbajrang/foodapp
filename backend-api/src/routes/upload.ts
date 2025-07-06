import { Router } from 'express';
import multer from 'multer';
import { handleUpload } from '../controllers/uploadController';

const router = Router();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (_req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

router.post('/', upload.single('image'), handleUpload);

export default router;
