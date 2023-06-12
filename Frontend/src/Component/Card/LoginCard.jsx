import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import LoginValidation from "../../Utils/LoginValidation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginCard = () => {
  
  const navigate = useNavigate();
  const [LoginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setLoginData(prev=>({...prev,[event.target.name]:[event.target.value]}));
  };

  const handleSubmit = (event) => {

    // console.log(LoginData.email);
    // console.log(LoginData.password);

    event.preventDefault();
    setErrors(LoginValidation(LoginData));
    if (errors.email === "" && errors.password === "") {
      // console.log("Success");
      axios.post("http://localhost:5000/login", LoginData).then((res) => {
        if (res.data === "Success") {
          navigate("/Home");
        } else {
          alert("No record exist");
        }
      });
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <Card sx={{ maxWidth: 345, display: "block", margin: "auto" }}>
          <CardContent>
            <TextField
              name="email"
              type="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ margin: "15px", width: "90%", color: "whitesmoke" }}
              onChange={handleInput}
              helperText={errors.email}
            />
            <TextField
              name="password"
              type="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              sx={{ margin: "15px", width: "90%" }}
              onChange={handleInput}
              helperText={errors.password}
            />
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{ width: "90%" }}
            >
              Sign in
            </Button>
            <Link
              href="#"
              underline="hover"
              sx={{ display: "block", margin: "10px 0px 0px 50%" }}
            >
              Forgot password?
            </Link>
          </CardContent>
        </Card>
      </form>

      <Typography
        variant="caption"
        sx={{
          display: "block",
          color: "whitesmoke",
          border: "1px solid",
          borderRadius: "5px",
          maxWidth: 345,
          margin: "auto",
          marginTop: "15px",
          height: "5%",
          fontSize: "17px",
          paddingTop: "15px",
        }}
        gutterBottom
      >
        New to DevRack?&nbsp;
        <Link href="#" underline="hover">
          Create an account
        </Link>
      </Typography>
    </>
  );
};

export default LoginCard;
