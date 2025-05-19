
import Wishlist from "../models/Wishlist.js";

//Add Product wishlist: /api/wishlist/add
export const addWishlist = async (req, res) => {
    try {
        const {id} = req.body
        const existing  = await Wishlist.findOne({id})
        if (existing) {
            return res.status(409).json({ success: false, message: "Product already in wishlist" });
        }

        // Create and save the new wishlist item
        const newProduct = new Wishlist({id});
        await newProduct.save();

        return res.status(201).json({ success: true, product: newProduct });

    } catch (error) {
        console.log(error.message);
        return res.json({success:false, message:error.message})
    }
}