//Libraries
import React from 'react';

//Functions
import { connect } from 'react-redux';

//Data
import processors from '../processors.js';

class ProcessTrackerContainer extends React.Component {
    componentDidUpdate(){
        this.renderProcessors()
    }

    renderProcessors = (location) => {
        const currentProc = this.props.currentProcessor
        const processorListData = processors[currentProc]
        const processorRenderList = []
        for (const proc in processorListData ){
            processorRenderList.push(
                <tr>
                    <td>{processorListData[proc].name}</td>
                    <td>{processorListData[proc].IPAdress}</td>
                    <td className={`table__row-item--${processorListData[proc].config.prcStatusClass}`}>{processorListData[proc].ProcessorStatus}</td>
                    <td>{processorListData[proc].Utilization}</td>
              </tr>)
        }
        return processorRenderList
    }

    render(){
        return(
            <main className="mx-2 process-tracker-container">
                <section className="row pt-4">
                    <div className="col-md-8 processor-tracker-section">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Processor Name</th>
                                    <th scope="col">IP Address</th>
                                    <th scope="col">Processor Status</th>
                                    <th scope="col">Utilization %</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.renderProcessors() }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4 d-flex justify-content-around">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Processor List
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#" onClick={this.props.changeProcessorWichita}>Wichita</a>
                                <a class="dropdown-item" href="#" onClick={this.props.changeProcessorTopeka}>Topeka</a>
                                <a class="dropdown-item" href="#" onClick={this.props.changeProcessorHouston}>Houston</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

const mapStateToProps = session => ({
    currentProcessor: session.processors.currentProcessor
})

const mapDispatchToProps = dispatch => ({
    changeProcessorHouston: procName => dispatch({type: "HOUSTON_PROCESSOR"}),
    changeProcessorTopeka: procName => dispatch({type: "TOPEKA_PROCESSOR"}),
    changeProcessorWichita: procName => dispatch({type: "WICHITA_PROCESSOR"}),
})



export default connect(mapStateToProps, mapDispatchToProps)(ProcessTrackerContainer);