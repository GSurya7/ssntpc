import React from "react";
import { useNavigate } from "react-router-dom";
import './index.css'


const Reports = () => {
 const navigate = useNavigate()
const back = () => {
    
    const home = '/'
    navigate(home)

}
  return (
    <div>
     <h1>Reports</h1>
     <button onClick={back}>Back to Home</button>
    </div>
  );
};

export default Reports