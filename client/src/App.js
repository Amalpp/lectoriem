import React from "react";


// import Admin from "./Components/Admin/Admin"
import User from "./Components/User/User"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route} from "react-router-dom"
import Admin from "./Components/Admin/Admin";

const App =()=>{
    return (
     <Router>
         <Route path="/"><User /></Route>
         <Route path="/admin"><Admin /></Route>
     </Router>
    )
}

export default App;