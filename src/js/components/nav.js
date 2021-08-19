import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className="nav-dashboard">
      <ul className="nav-dashboard_ul">
          <Link to="/dashboard"><li>Dashboard</li></Link>     
          <Link to="/loans"><li>Loans</li></Link>  
      </ul>
    </nav>
  );
};

export default Nav;
