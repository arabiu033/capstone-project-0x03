import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const { title } = props;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <span><NavLink to="/" onClick={() => title[1](() => 'Categories')}>Home</NavLink></span>
      <span>{ title[0] }</span>
      <ul>
        <span>Mic</span>
        <span>Settings</span>
      </ul>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};
export default Header;
