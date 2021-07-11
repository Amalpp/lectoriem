

import React, {useEffect,useState} from 'react';
// import {Link} from 'react-router-dom'
import "./Header.css"
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router';
import MenuItem from '@material-ui/core/MenuItem';

import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import SearchBar from "material-ui-search-bar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import { Button } from 'react-bootstrap';
import MenuBookIcon from '@material-ui/icons/MenuBook';








function Header() {
  const [showLinks, setShowLinks] = useState(false);


  useEffect(() => {
    var user = localStorage.getItem('user')
   
    console.log("effect...",user);
    
  })

  // let user = localStorage.getItem('username')
  let history = useHistory()

  function logout(){
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
    localStorage.removeItem('username')

    history.push('/login')
  }
 
    return (

      <div className = "Navbar">
        <div className="logo"><h3>Lectoriem</h3></div>
        <div className ="leftSide">
          
          <div className ="links" id ={showLinks ? "hidden" :""} >
          <a href="/home">Home</a>
          <a href="/myBook">My Book</a>
          {/* <a href="#">Browse<ArrowDropDownIcon /></a> */}
          <a href="/userProfile"><AccountCircleIcon /></a>
          <a href="/addBook"><MenuBookIcon/></a>
          <a href="/test">hii</a>
          </div>
          <button onClick ={()=> setShowLinks(!showLinks)} ><ReorderIcon /></button>
        </div>
        <div className ="rightSide">
        <input type="text" placeholder ="search "/>
          <button><SearchIcon /></button>
        <MenuItem  onClick={logout}><ExitToAppIcon /></MenuItem>
         
        </div>

      </div>
  
  
    )
}

export default Header
