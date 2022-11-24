import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import mic from '../assets/images/mic.png';
import setting from '../assets/images/setting.png';

const Header = (props) => {
  const { title } = props;

  return (
    <div className="header-container">
      <span><NavLink to="/" onClick={() => title[1](() => 'Categories')} className="header-home dhead">Home</NavLink></span>
      <span className="header-title dhead">{ title[0] }</span>
      <ul>
        <img src={mic} alt="mic" className="header-icons" />
        <img src={setting} alt="setting" className="header-icons" />
      </ul>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};
export default Header;
