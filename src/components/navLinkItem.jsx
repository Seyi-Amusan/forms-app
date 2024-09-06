import React from 'react';
import { Link } from 'react-router-dom';


function NavLinkItem({index, linkText, step}) {
    
    return (
        <Link to={step} className='nav-link-item-container'>
            <button className='index'>{index}</button>
            <div className='nav-link-text-container'>
                <p className='step'>STEP {index}</p>
                <p className='nav-link-text'>{linkText}</p>
            </div>
        </Link>
    );
}

export default NavLinkItem;