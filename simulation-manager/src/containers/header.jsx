//Libraries
import React from 'react';

//Components
import NavItem from '../components/nav-item.jsx';

//Functions
import { connect } from 'react-redux';


class Header extends React.Component {

    render(){
        return(
            <header className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand pr-4" href="#">{this.props.headerConfig.appName}</a>
                    <div className="navbar-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item p-3">
                                <a className="nav-link" href="#" onClick={this.props.addSimulationScheduler}>Simulation Scheduler</a>
                            </li>
                            <li className="nav-item p-3">
                                <a className="nav-link" href="#" onClick={this.props.addActiveQue}>Active Que</a>
                            </li>
                            <li className="nav-item p-3">
                                <a className="nav-link" href="#" onClick={this.props.addProcessTracker}>Process Tracker</a>
                            </li>
                            <li className="nav-item p-3">
                                <a className="nav-link" href="#" onClick={this.props.addSettings}>Settings</a>
                            </li>
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
    addActiveQue: routeName => dispatch({type: "NAV_ACTIVE_QUE"}),
    addProcessTracker: routeName => dispatch({type: "NAV_PROCESS_TRACKER"}),
    addSettings: routeName => dispatch({type: "NAV_SETTINGS"}),
    addSimulationScheduler: routeName => dispatch({type: "NAV_SIMULATION_SCHEDULER"}),
})

export default connect(null, mapDispatchToProps)(Header);
