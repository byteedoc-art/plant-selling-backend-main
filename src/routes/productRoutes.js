import express from 'express';
import { addProducts, editItems, getAllItems } from '../controllers/productController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const productRouter = express.Router();


productRouter.post('/add', addProducts);
productRouter.post('/get-items', getAllItems);
productRouter.post('/edit/:id', editItems);



export default productRouter;