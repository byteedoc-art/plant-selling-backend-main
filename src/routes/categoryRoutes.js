
import express from 'express';
import { creteCategoryController, getCategoryController, updateCategoryController } from '../controllers/categoryController.js';
const categoryRouter = express.Router();


categoryRouter.post('/create',creteCategoryController);
categoryRouter.get('/getAllCategory',getCategoryController);
categoryRouter.post('/updateCategory/:id',updateCategoryController);


export default categoryRouter;