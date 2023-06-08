import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { LoginCard } from "C://Users//gurve//My Projects//devrack//src//Component//index";

const Login = () => {
  const DivStyle = {
    backgroundColor: "#000028",
    width: "100%",
    height: "100vh",
  };

  const ImgStyle = {
    width: "74px",
    height: "74px",
    display: "inline-block",
    margin: "35px auto 0px auto",
  };

  return (
    <div style={DivStyle}>
      <img
        style={ImgStyle}
        src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-developer-coding-kiranshastry-gradient-kiranshastry.png"
        alt="Developer Icon"
      />
      <br />
      <Typography
        fontSize="2rem"
        color="white"
        align="center"
        display="inline-block"
        gutterBottom
      >
        Sign in to DevRack
      </Typography>
      <LoginCard />
      <Stack direction="row" spacing={2} sx={{display:"block",margin:"auto",marginTop:"7%"}}>
        <Link href="#" underline="hover">Terms</Link>
        <Link href="#" underline="hover">Privacy</Link>
        <Link href="#" underline="hover">Security</Link>
        <Link href="#" underline="hover" sx={{color:"GrayText"}}>Contact DevRack</Link>
      </Stack>
    </div>
  );
};

export default Login;
