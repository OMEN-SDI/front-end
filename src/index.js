import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import map from "./map.jpg";
import Styled from "styled-components";

const BackgroundImage = Styled.div`
  background: url(${map});
  background-repeat: repeat-y;
  background-size: cover;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BackgroundImage>

    {/* <div class="bg-image" 
     style={{backgroundImage: `url(${map})`,
     height: '100vh'}}> */}
      <App />
{/* </div> */}
    </BackgroundImage>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
