import React from "react";
import { useNavigate } from "react-router-dom";

import './index.css'


const TenderByLocation = () => {
const navigate = useNavigate()
const back = () => {
  const home = "/"
  navigate(home)
        console.log(home)
}

  return (
    <div>
     <h1>TenderByLocation</h1>   
     <button onClick={back}>Back To Home</button>
    </div>
  );
};

export default TenderByLocation; 