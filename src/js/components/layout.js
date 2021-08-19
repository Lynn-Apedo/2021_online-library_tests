import React from 'react';
import Header from './header';
import Nav from './nav';
import { useSelector, useDispatch } from 'react-redux';

const Layout = ({ children }) => {
  const user = useSelector((state) => state.auth.user.values);
  
  return (
    <div>
      <Header />
      <div>
        { user !== null && <Nav /> }
        
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
