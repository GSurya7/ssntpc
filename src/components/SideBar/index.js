import React from "react";
import { useNavigate } from "react-router-dom";
import './index.css'

const BtnList = [
  'TenderByLocation',
  'Tenders by Organisation',
  'Tenders by classification',
  'Tender in Archive',
  'Tender Status',
  'Canceled/Retendered',
  'Debarment List',
  'OpenTenderDocument'
];

const SideBar = () => {
    const navigate = useNavigate();
    const sideBtn = (btn) => {
        const route = `/${btn}`
        navigate(route)
        console.log(route)
    }
    
  return (
    <div className="sidebar">
      <a className="report" target="_blank" href="/Reports">Reports</a>
      {BtnList.map(btn => (
        <div key={btn}>
          <button onClick={() => sideBtn(btn)}>{btn}</button>
        </div>
      ))}
    </div>
  );
};

export default SideBar;