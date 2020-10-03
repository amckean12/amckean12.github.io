//Libraries
import React from 'react';

//Components
import NavItem from './components/nav-item.jsx';

class Header extends React.Component {

    renderNavLinks = () => {
        const links = []; 
        let linkValues = this.props.headerConfig.navItems
        if (typeof linkValues != "undefined"){
            for (let item in linkValues){
                links.push(
                    <NavItem 
                        name={linkValues[item].name}
                    />
                )     
            }
        }
        return links
    }
    render(){
        return(
            <header className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">{this.props.headerConfig.appName}</a>
                    {this.renderNavLinks()}
                </nav> 
            </header>
        )
    }
}

export default Header;
