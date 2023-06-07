import React from "react";
import Typography from "@mui/material/Typography";
import {LoginCard} from "C://Users//gurve//My Projects//devrack//src//Component//index";

const Login = () => {
    
  const DivStyle = {
    backgroundColor: "#000028",
    width: "100%",
    height: "100vh",
  };

  const ImgStyle = {
    width:"74px",
    height:"74px",
    display:"inline-block",
    margin: "35px auto 0px auto",
  };

  return (
    <div style={DivStyle}>
        <img
          style={ImgStyle}
          src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-developer-coding-kiranshastry-gradient-kiranshastry.png"
          alt="Developer Icon"
        />
      <br/>
      <Typography
        fontSize="2rem"
        color="white"
        align="center"
        display="inline-block"
        gutterBottom
      >
        Sign in to DevRack
      </Typography>
      <LoginCard/>
      
    </div>
  );
};

// login.propTypes = propTypes;
// login.defaultProps = defaultProps;

export default Login;
