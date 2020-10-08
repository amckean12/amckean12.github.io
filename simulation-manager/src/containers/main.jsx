//Libraries
import React from 'react';

//Components
import Header from './header.jsx';
import SimulationSchedulerContainer from './simulation-scheduler.jsx';
import ActiveQueContainer from './active-que.jsx';
import ProcessTrackerContainer from './process-tracker.jsx';
import SettingsContainer from './settings-container.jsx';

//Functions
import { connect } from 'react-redux';

//Data
import config from '../config.js';


class Main extends React.Component {
    componentDidUpdate(){
        this.renderMainComponent()
      }

    renderMainComponent = () => {
        if (this.props.routeState === "/simulation-scheduler"){
            return(<SimulationSchedulerContainer />)
        }
        if (this.props.routeState === "/process-tracker"){
            return(<ProcessTrackerContainer />)
        }
        if (this.props.routeState === '/settings'){
            return(<SettingsContainer />)
        }
        if (this.props.routeState === '/active-que'){
            return(<ActiveQueContainer />)
        }
    }

    render(){
        return(
            <div className="App">
                <Header 
                    headerConfig = {config.header}
                />
                { this.renderMainComponent() }
            </div>
        )
    }
}

const mapStateToProps = session => ({
    routeState: session.routes.currentRoute
})

export default connect(mapStateToProps, null)(Main);
