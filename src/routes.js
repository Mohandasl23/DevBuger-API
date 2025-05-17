// src/routes.js
import { Router } from 'express';
import UserController from './app/controllers/UserControllers.js';


const routes = Router();

routes.post('/users', UserController.store);
  


export default routes;
