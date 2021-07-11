import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { useHistory } from "react-router";
import GoogleLogin from "react-google-login";
import MainPage from "../MainPage";

const AuthorLogin = () => {
  const [login, setLogin] = useState();
  const [setLoginStatus] = useState(false);

  function changeHandler(event) {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
    console.log(login);
  }

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:5000/authlogin",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: login,
    }).then((response) => {
      if (!response.data.auth) {
        setLoginStatus(false);
        if (response.data.wrong) {
          document.getElementById("loginError").innerHTML =
            "Invalid username or password";
        } else if (response.data.notUser) {
          document.getElementById("loginError").innerHTML = "User not valid";
        }
      } else {
        setLoginStatus(true);
        console.log("wr", response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        // localStorage.setItem('username', response.data)
        localStorage.setItem("username", response.data.user.username);
        history.push("/");
      }
    });
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    let starToken = localStorage.getItem("starToken");
    console.log("effect...", token);

    if (token || starToken) {
      history.push("/");
    }
  });

  let values = {};

  const responseSuccessGoogle = (response) => {
    console.log(response.profileObj.name, response.profileObj.email);
    console.log(response);
    console.log(values);
    values.username = response.profileObj.name;
    values.email = response.profileObj.email;
    console.log(values);
    axios({
      method: "post",
      url: "http://localhost:5000/googleLogin",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    }).then((response) => {
      if (response) {
        console.log("returned", response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("username", response.data.username);
        history.push("/home");
      }
    });
  };
  const responseErrorGoogle = (response) => {
    console.log(response);
  };

  const btstyle = { margin: "30px 0" };
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px auto",
    backgroundColor: "#f5eae1",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  return (
    <div>
      <MainPage />
    <form onSubmit={handleSubmit}>
      <Grid  style={{
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
            <h3> <span style={{color:"#994c1c"}}>Author</span> Login</h3>
          </Grid>

          <GoogleLogin
            clientId="346105990775-qfrb6fjm4gapmf6pu8skeocjin7g2jsm.apps.googleusercontent.com"
            buttonText="Log in with Google"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={"single_host_origin"}
            fullWidth
            required
          />

          <TextField
            name="email"
            id="email"
            label="email"
            onChange={changeHandler}
            placeholder="Enter email"
            fullWidth
            required
          />
          <TextField
            name="password"
            id="password"
            label="Password"
            onChange={changeHandler}
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />
          <p
            id="loginError"
            className="text-center"
            style={{ color: "red" }}
          ></p>
          <Button type="submit" style={btstyle} variant="contained" fullWidth>
           Login
          </Button>
          <Typography>
            Not a member ?<Link href="/authorRegister">Register</Link>
          </Typography>
        </Paper>
      </Grid>
    </form>
    </div>
  );
};

export default AuthorLogin;
