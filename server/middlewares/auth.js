import jwt from 'jsonwebtoken';

// Middleware Function to decode jwt token to get clerkId

const authUser = async (req, res, next)=>{
 try{
   const {token} = req.headers
   if(!token){
    return res.json({success:false, message: 'Not Authorized login Again'})
   }
   const token_decode = jwt.decode(token)
   req.body.clerkId = token_decode.clerkId
   next()
 }catch (err){
  console.log(err.message)
  res.json({success:false, message: err.message})
 }
}

export default authUser;