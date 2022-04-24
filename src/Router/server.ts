import express from 'express';
import displayimg from './imgprocessing/imgprocess';
const middleware = express.Router();
middleware.use('/esraa', displayimg);

export default middleware;
