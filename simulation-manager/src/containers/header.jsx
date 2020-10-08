//Libraries
import React from 'react';

//Components
import NavItem from '../components/nav-item.jsx';

//Functions
import { connect } from 'react-redux';


class Header extends React.Component {

    renderNavLinks = () => {
        const links = []; 
        let linkValues = this.props.headerConfig.navItems
        if (typeof linkValues != "undefined"){
            for (let item in linkValues){
                links.push(
                    <NavItem 
                        name={linkValues[item].name}
                        className = {linkValues[item].className}
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
                    <a className="navbar-brand pr-4" href="#">{this.props.headerConfig.appName}</a>
                    <div className="navbar-nav">
                        <ul className="navbar-nav mr-auto">
                            {this.renderNavLinks()}
                        </ul>
                    </div>
                    <div className="d-flex header--logo-cotainer">
                        <div className="header--logo">
                            Wood.
                        </div>
                    </div>
                </nav> 
            </header>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addActiveQue: routeName => dispatch({type: "NAV_ACTIVE_QUE", routeName}),
    addProcessTracker: routeName => dispatch({type: "NAV_PROCESS_TRACKER", routeName}),
    addActiveQue: routeName => dispatch({type: "NAV_SETTINGS", routeName}),
    addActiveQue: routeName => dispatch({type: "NAV_SIMULATION_SCHEDULER", routeName}),
})

export default connect(mapDispatchToProps)(Header);
