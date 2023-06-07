import React from "react";
import {Login} from "./Pages/index";
// import { ThemeProvider } from "@material-ui/styles";
// import { createTheme } from "@material-ui/core/styles";
import "./App.css";

// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//   },
// });

function App() {
  return (
    <div className="App">
      <Login/>
      {/* <ThemeProvider theme={theme}>
      <Login/>
    </ThemeProvider> */}
    </div>
  );
}

export default App;
