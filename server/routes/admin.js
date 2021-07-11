import express from 'express';
import jwt from 'jsonwebtoken';
import { adminLogin } from '../controllers/admin.js';





const router = express.Router()

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];
    const starToken = req.headers["x-access-token"]
    // console.log('tooken',token);
    if(!token && !starToken){
        res.send("Not authenticated")
    } else if(token){
        jwt.verify(token, "lectoriemSecret", (err, decoded)=>{
            if(err){
                console.log(err);
                res.json({ auth: false, message: "Failed to authenticate"})
            } else {
                req.userId = decoded.id
                console.log('decoded')
                next();
            }
        })
    }else if(starToken){
        jwt.verify(starToken, "lectoriemSecret", (err, decoded)=>{
            if(err){
                console.log(err);
                res.json({ auth: false, message: "Failed to authenticate"})
            } else {
                req.starId = decoded.id
                console.log('decoded')
                next();
            }
        })
    }
}

router.post('/adminLogin',adminLogin)



export default router;