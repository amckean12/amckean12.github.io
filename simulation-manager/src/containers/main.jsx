//Libraries
import React from 'react';

//Components
import Header from './header.jsx';
import SimulationManagerContainer from './simulation-scheduler.jsx';
import ActiveQueContainer from './active-que.jsx';
import ProcessTrackerContainer from './process-tracker.jsx';
import SettingsContainer from './settings-container.jsx';

//Data
import config from '../config.js';


class Main extends React.Component {

    renderMainComponent = () => {
        
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

export default Main;
