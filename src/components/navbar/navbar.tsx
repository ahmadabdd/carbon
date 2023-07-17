import React from 'react';
import './navbar.css';
import { Bell } from 'react-feather';


const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-icons">
        <Bell />
        <img className="profile-pic" src={'https://api.multiavatar.com/Binx Bond.svg'} alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
