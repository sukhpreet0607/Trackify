function LoginValidation(LoginData){

    let error = {};
    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;

    if (LoginData.email=== ""){
        error.email = "Email should not be empty";
    }
    else if (!email_pattern.test(LoginData.email)){
        error.email = "Invalid email";
    }
    else {
        error.email = "";
    }
    

    if (LoginData.password === ""){
        error.password = "Password should not be empty";
    }
    else if (!password_pattern.test(LoginData.password)){
        error.password = "Invalid password";
    }
    else {
        error.password = "";
    }

    return error;

}

export default LoginValidation;