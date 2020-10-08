import React from 'react';


const NavItem = props => {
    const anchorClass = `nav-link nav-link--${props.className}`;
    return(
        <li className="nav-item p-3">
            <a className={anchorClass} href="#">{props.name}</a>
        </li>
    );
}

export default NavItem;