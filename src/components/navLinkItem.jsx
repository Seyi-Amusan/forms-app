import { NavLink, useLocation } from 'react-router-dom';
import React from 'react';

function NavLinkItem({ index, linkText, step }) {
  const location = useLocation(); // Get the current route

  // Determine if this NavLink is active by checking the current URL
  const isActive = location.pathname.includes(step);

  return (
    <NavLink to={step} className='nav-link-item-container'>
      <button className={`index ${isActive ? 'active' : ''}`}>{index}</button>
      <div className='nav-link-text-container'>
        <p className='step'>STEP {index}</p>
        <p className='nav-link-text'>{linkText}</p>
      </div>
    </NavLink>
  );
}

export default NavLinkItem;
