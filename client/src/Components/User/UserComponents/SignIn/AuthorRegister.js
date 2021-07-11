import React, { useState } from "react";
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
import MainPage from "../MainPage";

const AuthorRegister = () => {
  const [authorRegister, setLogin] = useState();

  function changeHandler(event) {
    setLogin({
      ...authorRegister,
      [event.target.name]: event.target.value,
    });
    console.log(authorRegister);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/authorRegister", authorRegister)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const btstyle = { margin: "30px 0" };
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px auto",
    backgroundColor:"#f5eae1"
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
            <h3 font-size="bold">AUTHOR IN</h3>
          </Grid>

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
          <Button
            type="submit"
            color="Primary"
            style={btstyle}
            variant="contained"
            fullWidth
          >
            SIGN In
          </Button>
          <Typography>
            Not a member ?<Link href="/authlogin">Login as an Author</Link>
          </Typography>
        </Paper>
      </Grid>
    </form>
    </div>
  );
};

export default AuthorRegister;
