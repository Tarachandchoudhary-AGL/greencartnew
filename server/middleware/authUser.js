import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ success: false, message: 'Not Authorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded.id) {
            return res.status(401).json({ success: false, message: 'Invalid token' });
        }

        req.user = { id: decoded.id }; // ✅ Assign to req.user
        next();

    } catch (error) {
        console.log("authUser - ", error.message);
        return res.status(401).json({ success: false, message: 'Token invalid or expired' });
    }
};

export default authUser;
