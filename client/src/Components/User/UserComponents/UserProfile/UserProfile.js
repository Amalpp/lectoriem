



import React from 'react'
import FullWidthTabs from './FullWidthTabs';

import "./UserProfile.css";

const UserProfile = () => {
  // const avatarStyle = { backgroundColor: "#1bbd7e" };
  return (
    <div style={{maxWidth:"550px",margin:"0px auto"}}>
      <div className="row">
        <div>
          <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style={{width:"160px" ,height:"160px",borderRadius:"80px"}} alt="" />
        </div>
        <div>
          <h4>Amal pp</h4>
          <div className="activity">
            <h6>49 posts</h6>
            <h6>40 followers</h6>
            <h6>50 following</h6>
          </div>
        </div>
      </div>
      <div className="gallery">
     <FullWidthTabs />
     
      
      </div>
    </div>
   
  )
}

export default UserProfile
