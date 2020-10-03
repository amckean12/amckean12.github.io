import React from 'react';


const NavItem = props => {
    return(
        <li class="nav-item p-3">
            <a class="nav-link" href="#">{props.name}</a>
        </li>
    );
}

export default NavItem;