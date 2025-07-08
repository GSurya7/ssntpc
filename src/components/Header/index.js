import React from "react";
import './index.css'

const list = ['Search', 'Active Tenders', 'Tenders by Closing', 'Corrigendum']

const Header = () => {

    const tender = (n) => {
   console.log(n)
  }
    return (
        <div>
        <div className="img">
            <img src="https://eprocurentpc.nic.in/nicgep/images/topban.png" alt="ntpc" />
        </div>
        <div className="bg-container">
        {list.map(name => (
          <p className="p" onClick={() => tender(name)} key={name}>{name}</p>
       ))}
      </div>
        </div>
    )
}
export default Header;