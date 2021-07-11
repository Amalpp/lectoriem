import React from 'react'

import {BrowserRouter as Router ,Route } from "react-router-dom"
import SignIn from './UserComponents/SignIn/SignIn.js'
import Register from './UserComponents/SignIn/Register'

import Home from './UserComponents/Home/Home'
import Header from './UserComponents/Header/Header.js'
import UserProfile from './UserComponents/UserProfile/UserProfile.js'
import EditProfile from './UserComponents/UserProfile/EditProfile.js'
import AuthorRegister from './UserComponents/SignIn/AuthorRegister.js'
import AuthorLogin from './UserComponents/SignIn/AuthorLogin.js'
import AddBooks from './UserComponents/AddBook/AddBooks.js'
import AddImage from './UserComponents/AddBook/AddImage.js'
import MyBooks from './UserComponents/MyBooks/MyBooks.js'



function User() {
    return (
            <div>
 <Router>
 <Route path="/" exact><Header /></Route>
            <Route path="/login">   <SignIn /></Route>
            <Route path="/register"><Register /></Route>
            <Route path = "/authorRegister"> <AuthorRegister /></Route>
            <Route path = "/home">< Header />< Home /></Route>
            <Route path = "/userProfile">< Header /><UserProfile /></Route>
            <Route path = "/editProfile"><Header /><EditProfile /></Route>
            <Route path = "/authlogin"><AuthorLogin /></Route>
            <Route path= "/addBook">< Header /><AddBooks /></Route>
            <Route path="/test"><Header /><AddImage/></Route>
            <Route path="/myBook"><Header/><MyBooks /></Route>
         
            </Router> 
        
            </div>
           
    )
}

export default User

