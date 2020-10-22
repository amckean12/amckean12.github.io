//Libraries
import React from 'react';

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
    }

    componentDidMount(){
        this.setActiveSimulationState();
    }

    
    setActiveSimulationState = () => {
        const localSimulationList = []
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
        this.setState({simulationList: localSimulationList})
    }
    render(){
        return(
            <main className="mx-2 acitve-que-container">
                <section className="process-tracker-section pt-4">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Input Priority</th>
                                <th scope="col">User</th>
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