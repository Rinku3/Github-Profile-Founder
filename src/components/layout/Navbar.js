import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon}> {title} </i>
      </h1>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fa fa-github',
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
