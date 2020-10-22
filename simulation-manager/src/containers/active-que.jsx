//Libraries
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort} from '@fortawesome/free-solid-svg-icons'

//Functions
import { connect } from 'react-redux';

//Data
import activeSimulations from '../activeSimulations.js'
import activeSimulationsUser from '../activeSimulationsName.js'

class ActiveQueContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            simulationList: [],
            orderList: [],
            sortingFactor: "inputPriority",
        }
        this.setUserSimulationStatus = this.setUserSimulationStatus.bind(this)
        this.setInputSimulationStatus = this.setInputSimulationStatus.bind(this)
    }

    componentDidMount(){
        this.setActiveSimulationState();
    }

    setUserSimulationStatus = () => {
        this.setState({
            sortingFactor: "userPriority"
        })
        this.setActiveSimulationState();
    }

    setInputSimulationStatus = () => {
        this.setState({
            sortingFactor: "inputPriority"
        })
        this.setActiveSimulationState();
    }

    
    setActiveSimulationState = () => {
        const localSimulationList = []
        if (this.state.sortingFactor === "inputPriority"){
            for (const simulation in activeSimulations){
                localSimulationList.push(
                    <tr>
                        <td>{activeSimulations[simulation].inputPriority}</td>
                        <td>{activeSimulations[simulation].user}</td>
                        <td>{activeSimulations[simulation].modeType}</td>
                        <td>{activeSimulations[simulation].modelName}</td>
                        <td>{activeSimulations[simulation].dependencies}</td>
                        <td>{activeSimulations[simulation].assignedProc}</td>
                        <td className={`table__row-item--${activeSimulations[simulation].config.simulationStatusClass}`}>{activeSimulations[simulation].simulationStatus}</td>
                    </tr>
                )
            }
        }
        if (this.state.sortingFactor === "userPriority"){
            for (const simulation in activeSimulationsUser){
                localSimulationList.push(
                    <tr>
                        <td>{activeSimulationsUser[simulation].inputPriority}</td>
                        <td>{activeSimulationsUser[simulation].user}</td>
                        <td>{activeSimulationsUser[simulation].modeType}</td>
                        <td>{activeSimulationsUser[simulation].modelName}</td>
                        <td>{activeSimulationsUser[simulation].dependencies}</td>
                        <td>{activeSimulationsUser[simulation].assignedProc}</td>
                        <td className={`table__row-item--${activeSimulationsUser[simulation].config.simulationStatusClass}`}>{activeSimulationsUser[simulation].simulationStatus}</td>
                    </tr>
                )
            }
        }
        this.setState({simulationList: localSimulationList})
    }
    render(){
        return(
            <main className="mx-2 acitve-que-container">
                <section className="process-tracker-section pt-4">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col" onClick={this.setInputSimulationStatus}>Input Priority <FontAwesomeIcon icon={faSort} /></th>
                                <th scope="col" onClick={this.setUserSimulationStatus}>User <FontAwesomeIcon icon={faSort} /></th>
                                <th scope="col">Model Type</th>
                                <th scope="col">Model Name</th>
                                <th scope="col">Dependencies</th>
                                <th scope="col">Assigned Processor</th>
                                <th scope="col">Simulation Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.simulationList }
                        </tbody>
                    </table>
                </section>
            </main>
        )
    }
}

export default ActiveQueContainer;