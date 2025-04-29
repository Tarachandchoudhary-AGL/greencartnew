import jwt from 'jsonwebtoken'

const authSeller = async (req, res, next)=>{
    const {sellerToken} = req.cookies;

    if(!sellerToken){
        return res.json({success:false, message:'Noth Authorized'})
    }

    try {
        const decoded = jwt.verify(sellerToken, process.env.JWT_SECRET);

        if (decoded.email === process.env.SELLER_EMAIL) {
            next();
        }else{
            return res.json({ success: false, message: 'Not Authorized' });
        }

    } catch (error) {
        console.log("authUser - ", error.message);
        return res.status(401).json({ success: false, message: 'Token invalid or expired' });
    }
}

export default authSeller;