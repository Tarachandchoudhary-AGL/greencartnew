import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
    id: { type: String, required: true, unique:true }
}, {timestamps:true});


const Wishlist = mongoose.models.wishlist || mongoose.model('wishlist', wishlistSchema);

export default Wishlist;