import express from 'express'
import { addWishlist } from '../controllers/wishlistController.js';

const wishlistRoute = express.Router();

wishlistRoute.post('/add', addWishlist)

export default wishlistRoute;