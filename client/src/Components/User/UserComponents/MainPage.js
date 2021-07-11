import React from 'react'



const MainPage = () => {
    
   
    return (
        <div  style={{backgroundColor:"#fffbf7"}}>
            <div style={{backgroundColor:"#f2ead3",height:"10vh"}}>
            <h2 style={{marginLeft:80 ,alignItems:"center"}}>Lecto<span style={{color:"#613605" }}>riem</span> </h2>
         
            </div>
             <img src={process.env.PUBLIC_URL +"/amal-book-cover.png"} width="100%"  alt="homeImage" />
             <div >
            <h6 style={{marginTop:30 ,marginLeft:70}}>Deciding what to read next?</h6>
           
           <span style={{marginLeft:70  ,color:"GrayText",marginTop:20}}> You’re in the right place. Tell us what titles or   </span><br />
           <span style={{marginLeft:70,color:"GrayText"}}>genres you’ve enjoyed in the past, and we’ll  </span><br />
           <span style={{marginLeft:70 ,color:"GrayText"}}>give you surprisingly insightful recommendations.</span>
           <a href="/authlogin" style={{alignItems:"center",float:"right",marginRight:50,textDecoration:"none",color:"#613605"}}>Author Login</a>
             </div>
        </div>

    )
}

export default MainPage
