import { response} from 'express';
import  {Details, books, userDetails} from '../models/users.js'; 

import bcrypt from 'bcrypt';

// import fs from 'fs';
import jwt from 'jsonwebtoken';

// import mongoose from  'mongoose';

// import { resolve  } from 'path'


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

export const getLogin = async (req, res) => {
    console.log("login",req.body)
    let response = {}

    try {
        let loginDetails = req.body
        console.log('in',loginDetails);


        let user = await userDetails.find({
            email: loginDetails.email
        })

        console.log('user details',user)


        if (user.length > 0) {
            console.log('**i**')
       
            bcrypt.compare(loginDetails.password, user[0].password).then((status) => {
                if (status) {
                    response.valid = true
                    console.log('in back valid', status);

                    const id = user[0]._id
                    const token = jwt.sign({
                        id
                    }, "lectoriemSecret", {
                        expiresIn: 300000000000,
                    })
                    console.log('456', user[0]);
                    res.json({
                        auth: true,
                        token: token,
                        userId: user[0]._id,
                        username: user[0].username,
                        user: user[0]
                    })
                } else {
                    console.log('in back wrong', status);

                    res.json({
                        auth: false,
                        message: "invalid credentials",
                        wrong: true
                    })
                }
            })
        } else {
            response.notUser = true
            console.log('in back not user');
            res.json({
                auth: false,
                message: "no user exists",
                notUser: true
            })
        }
    } catch (error) {

    }

}

export const register = async (req,res) => {
    console.log("values vaan",req.body);
    let userDetail = req.body;
    let status = {};

    userDetail.password = await bcrypt.hash(userDetail.password, 10)
    console.log("pass",userDetail.password);
    const newUser = new userDetails(userDetail)


    newUser.save()
    .then((response)=>{
        console.log("newuser",response);
        status.verified = true
        const id = response._id
        const token = jwt.sign({id}, "lectoriemSecret", {
            expiresIn: 300000000000,
        })
        res.json({
            auth: true,
            token: token,
            userId: response._id,
            username: response.username

        }) 
    }).catch((data)=>{
        console.log('backinval', data);
            status.invalid = true
            res.json(status)

    })
}

export const googleSignup = async (req, res) => {
    const user = req.body
    console.log('in back', user);
    let existingAccount = await userDetails.find({
        email: user.email
    })
    if (existingAccount) {
        console.log("exist",existingAccount);
        res.json(existingAccount)
    } else {
        const newUser = new userDetails(user)
        console.log("newuser",newUser)
        newUser.save().then((response) => {
            console.log('ivideethii', response);
            status.verified = true
        const id = response._id
        const token = jwt.sign({id}, "lectoriemSecret", {
            expiresIn: 300000000000,
        })
            res.json({
                auth: true,
            token: token,
            userId: response._id,
            username: response.username
            })
        }).catch((data)=>{
            console.log('backinval', data);
                status.invalid = true
                res.json(status)
    
        })
    }
}




export const googleLogin = async (req, res) => {
    const user = req.body
    console.log('back', user);
    let existingAccount = await userDetails.find({
        email: user.email
         
    })
    console.log('exis',existingAccount)
    if (existingAccount.length>0) {
        const id = existingAccount[0]._id
        const token = jwt.sign({
            id
        }, "lectoriemSecret", {
            expiresIn: 30000000000000,
        })
        console.log('google jwt success')
        res.json({
            auth: true,
            token: token,
            userId: existingAccount[0]._id,
            username: existingAccount[0].username,
            user: existingAccount[0]
        })
    } else {
        const newUser = new userDetails(user)
        console.log('new user added');

        newUser.save().then((response) => {
            console.log('in back', response);
            res.json(response)
        })
    }
}


export const authlogin = async (req,res) => {
    let authorDetail = req.body;
    authorDetail.type ="author"
    let status ={}
    authorDetail.password = await bcrypt.hash(authorDetail.password, 10)
    console.log("pass",authorDetail.password);
    const newUser = new userDetails(authorDetail)
    

    newUser.save().then((response)=>{
        console.log("newauthor",response);
       status.verified =true
        const id = response._id
        const token = jwt.sign({id}, "lectoriemSecret", {
            expiresIn: 300000000000,
        })
        res.json({
            auth: true,
            token: token,
            userId: response._id,
            username: response.username
           
           
        }) 
    }).catch((data)=>{
        console.log('backinval', data);
            status.invalid = true
            res.json(status)

    })

}



export const addBooks = (req,res)=>{
    var image = req.files.files
    // console.log("image",image)
    image.mv('public/Image/'+image.name,function(err){
        if(err){
            res.json({"status":"image not uploaded"})
        }
        else{
            
            var data = req.body.name
        var ll ={
            bookname:data.bookname,
            authorname:data.authorname,
            category:data.category,
            description:data.description
        }
        
            console.log("bookdetails",ll)
            const newImg = new Details(ll)
            newImg.save().then(
                (res) => {
                    console.log("res",res)
                  res.json({
                    message: 'Post saved successfully!'
                  });
                }
              ).catch(
                (error) => {
                  res.json({
                    error: error
                  });
                }
              );
            
        }
    })
}
   
 
export const addimage = (req,res)=>{
    var pp =req.files.dp
var kk= req.body
console.log("ee",kk)
    // console.log(pp);
    pp.mv('public/uploads/'+pp.name,function(err){

        if(err){
            res.json({"status":"file not uploaded"})

        }
        else{ 

            var insobj = {
                bookname:kk.bookname,
                authorname:kk.authorname,
                category:kk.category,
                description:kk.description,
                pic:pp.name
            }
        console.log("data",insobj)
        const newImage = new books(insobj)
        newImage.save().then(
            () => {
              res.status(201).json({
                message: 'Post saved successfully!'
              });
            }
          ).catch(
            (error) => {
              res.status(400).json({
                error: error
              });
            }
          );
       
        }

    })
}


