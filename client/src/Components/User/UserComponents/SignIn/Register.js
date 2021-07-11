import React, { useState ,useEffect} from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
import GoogleLogin from 'react-google-login'; 
import {  useHistory } from 'react-router-dom'
import MainPage from "../MainPage";

const Register = () => {
  const [register, setRegister] = useState();
  useEffect(() => {
    let token = localStorage.getItem('jwt')
    if (token) {
        history.push('/home')
    }
  }, )
  let history = useHistory()
  function changeHandler(event) {
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    });
    console.log(register);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:5000/register",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: register,
    }).then((response) => {
      history.push("/home")
    });
  };


  let values = {}

  const responseSuccessGoogle = (response) => {
    console.log(response.profileObj.name,response.profileObj.email)
    console.log(response);
    console.log(values);
    values.username = response.profileObj.name
    values.email = response.profileObj.email
    console.log(values);
    axios({
     method: "post",
     url: "http://localhost:5000/googleSignup",
     headers: {
       "Content-Type": "application/json",
     },
     data: values
   }).then((response)=>{
     if(response){
       console.log('returned',response)
       localStorage.setItem("token", response.data.token)
       localStorage.setItem("userId", response.data.userId)
       localStorage.setItem("username", response.data.username)
       history.push("/home")
     }
   })

 }
  const responseErrorGoogle = (response) => {
    console.log(response);    
  }

  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 300,
    margin: "50px auto",
    backgroundColor:"#f5eae1"
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btstyle = { margin: "8px 0" };

  return (
    <div>
      <MainPage />
    <form onSubmit={handleSubmit}>
      <Grid style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
      }} >
        <Paper elavation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h3>SIGN UP</h3>
          </Grid>
          <GoogleLogin
          clientId="346105990775-qfrb6fjm4gapmf6pu8skeocjin7g2jsm.apps.googleusercontent.com"
          buttonText="Log in with Google"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle} 
          cookiePolicy={'single_host_origin'}
          fullWidth
          required
        />
          <TextField
            name="username"
            label="username"
            onChange={changeHandler}
            placeholder="Enter Username"
            fullWidth
            required
          />

          <TextField
            name="email"
            label="email"
            onChange={changeHandler}
            placeholder="Enter email"
            type="email"
            fullWidth
            required
          />

          <TextField
            name="mobile"
            label="mobile"
            onChange={changeHandler}
            placeholder="Enter mobile"
            fullWidth
            required
          />

          <TextField
          name="password"
            label="Password"
            onChange={changeHandler}
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />

          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" Username />}
            label="Remember me"
          />
          <Button type="submit" style={btstyle} variant="contained" fullWidth>
            SIGN UP
          </Button>
          <Typography>
            <Link href="#">forgot password ?</Link>
          </Typography>
          <Typography>
            Do you have an acount ?<Link href="/login">Sign IN</Link>
          </Typography>
        </Paper>
      </Grid>
    </form>
    </div>
  );
};

export default Register;
