import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

const LoginCard = () => {
  return (
    <>
      <Card sx={{ maxWidth: 345, display: "block", margin: "auto" }}>
        <CardContent>
          <TextField
            id="outlined-basic"
            label="Username or Email"
            variant="outlined"
            sx={{ margin: "15px", width: "90%" }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ margin: "15px", width: "90%" }}
          />
          <Button variant="contained" color="success" sx={{ width: "90%" }}>
            Sign in
          </Button>
          <Link href="#" sx={{ display: "block", margin: "10px 0px 0px 50%" }}>
            Forgot password?
          </Link>
        </CardContent>
      </Card>
      <Typography variant="caption" sx={{display:"block",color:"whitesmoke",border:"1px solid",borderRadius:"5px",maxWidth:345,margin:"auto",marginTop:"15px",height:"5%",fontSize:"17px",paddingTop:"15px"}} gutterBottom>
        New to DevRack?&nbsp;
        <Link href="#">
            Create an account
          </Link>
      </Typography>
    </>
  );
};

LoginCard.propTypes = propTypes;
LoginCard.defaultProps = defaultProps;

export default LoginCard;
