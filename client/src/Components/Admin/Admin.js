import React from 'react'

import {BrowserRouter as Route, Switch } from "react-router-dom"
import AdminHome from './adminComponents/AdminHome'
// import AdminHome from './adminComponents/AdminHome'
import AdminLogin from './adminComponents/AdminLogin'

const Admin = () => {
    return (
        <div>
           <Switch>
               <Route path ="/admin/login" ><AdminLogin /></Route>
               <Route path ="/admin" ><AdminHome /></Route>

             
           </Switch>
        </div>
    )
}

export default Admin
