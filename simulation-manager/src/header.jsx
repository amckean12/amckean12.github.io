//Libraries
import React from 'react';

//Components
import NavItem from './components/nav-item.jsx';

class Header extends React.Component {
    render(){
        return(
            <header className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">{this.props.headerConfig.appName}</a>
                </nav> 
            </header>
        )
    }
}

export default Header;
