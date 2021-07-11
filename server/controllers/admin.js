import jwt from 'jsonwebtoken';








const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        res.send("Not authenticated")
    } else {
        jwt.verify(token, "lectoreimSecret", (err, decoded) => {
            if (err) {
                res.json({
                    auth: false,
                    message: "Failed to authenticate"
                })
            } else {
                req.userId = decoded._id
                next();
            }
        })
    }
}


export const adminLogin = (req,res) =>{
    console.log("**in**",req.body)
  
    let email = req.body.email;
    let password = req.body.password;

    let admin = {email:"admin@gmail.com",password:"12345"}

    let response = {}
    if(email == admin.email && password == admin.password){
        console.log("sssssssss");
        const id = 'adminToken'
        const token = jwt.sign({
            id
        }, "lectoriemSecret", {
            expiresIn: 300000000000,
        })
        res.json({
            auth: true,
            token: token
            
        })
        
    }else{
        response.notUser = true
            console.log('in back not user');
            res.json({
                auth: false,
                message: "no admin exists",
                notUser: true
            })
    }
}