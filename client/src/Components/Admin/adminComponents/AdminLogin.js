import React,{useState}from 'react'
import {
    Grid,
    Paper,
    Avatar,
    TextField,
    Button,
   
  } from "@material-ui/core";
import { useHistory } from 'react-router';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import axios from 'axios';
import AdminPage from './AdminPage';
const AdminLogin = () => {

    const [adminLogin,setAdminLogin]= useState();
    

    function changeHandler(event) {
        setAdminLogin({
          ...adminLogin,
          [event.target.name]: event.target.value,
        });
        console.log(adminLogin);
      }
    const history = useHistory();
     
    const handleSubmit = (e) => {
        e.preventDefault();


        axios({
            method: "post",
            url: "http://localhost:5000/admin/adminLogin",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            data: adminLogin,
          }).then((response) => {
            console.log('**',response)
            if(!response.data.auth){
              setAdminLogin(false)
              if(response.data.wrong){
                document.getElementById('loginError').innerHTML = "Invalid username or password"
              }else if(response.data.notUser){
                document.getElementById('loginError').innerHTML = "Admin not valid"
              }
              
            }else{
              setAdminLogin(true)
              console.log('wr',response.data)
              localStorage.setItem("admintoken", response.data.token)
  
              history.push("/admin");
            }
          })
          
    }
    const paperStyle = {
        padding: 20,
        height: "70vh",
        width: 300,
        margin: "0px auto",
        backgroundColor:"#f5eae1",
      };
      const avatarStyle = { backgroundColor: "#1bbd7e" };
    return (
       <>
       <AdminPage />
      <div style={{backgroundColor:"Background"}}>
      <form onSubmit={handleSubmit}>
    <Grid style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
      }}>
      <Paper elavation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h3 style={{color:"#4b7d5f"}}><span style={{color:"#994c1c"}}>Admin</span> Login</h3>
        </Grid>

        
        <TextField
          name="email"
          id ="email"
          label="email"
          onChange={changeHandler}
          placeholder="Enter email"
          fullWidth
          required
        />
        <TextField
          name="password"
          id ="password"
          label="Password"
          onChange={changeHandler}
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <p id="loginError" className="text-center" style={{color: "red"}}></p>
        <Button type="submit" style={{color:"#994c1c",margin: "50px 0",backgroundColor:"#1bbd7e   "}}variant="contained" fullWidth>
          SIGN In
        </Button>
       
      </Paper>
    </Grid>
  </form>
  </div>
  </>
    )
}

export default AdminLogin
