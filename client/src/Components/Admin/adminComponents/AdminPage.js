import React from 'react'

const AdminPage = () => {
    return (
        <div  style={{backgroundColor:"#fffbf7"}}>
             <div style={{backgroundColor:"#f2ead3",height:"10vh"}}>
            <h2 style={{marginLeft:80 ,alignItems:"center"}}>Lecto<span style={{color:"#613605" }}>riem</span> </h2>
            
            </div>
            <img src={process.env.PUBLIC_URL +"/office-worker.jpg"} width="100%"  alt="adminImage" />
        </div>
    )
}

export default AdminPage
