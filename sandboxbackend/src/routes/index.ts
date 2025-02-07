import express, { Request, Response } from 'express';
import { FrontendRequestController } from '../controllers/FrontendRequestController'
const routes = express.Router();

const requestContr = new FrontendRequestController()

routes.post('/api/cooking', requestContr.index);


export default routes;