import jwt from 'jsonwebtoken'

const adminAuth = async (req,res,next) => {
  try {
    const { token } = req.headers
    if (!token) {
      return res.json({success:false,message:"Please sign in to access the admin panel."})
    }
    const token_decode = jwt.verify(token,process.env.JWT_SECRET);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({success:false,message:"Authentication failed. Please log in again."})
    }
    next()
  } catch (error) {
    console.log(error);
    res.json({success:false, message:"Your session has expired. Please sign in again."})
  }
}

export default adminAuth