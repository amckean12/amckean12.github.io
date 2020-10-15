//Libraries
import React from 'react';

//Functions
import { connect } from 'react-redux';

//Data
import processors from '../processors.js';

class ProcessTrackerContainer extends React.Component {

    renderProcessors = (location) => {
        const processorListData = processors.wichita
        const processorRenderList = []
        for (const proc in processorListData ){
            processorRenderList.push(
                <tr>
                    <td>{processorListData[proc].name}</td>
                    <td>{processorListData[proc].IPAdress}</td>
                    <td>{processorListData[proc].ProcessorStatus}</td>
                    <td>{processorListData[proc].Utilization}</td>
              </tr>)
        }
        return processorRenderList
    }

    render(){
        return(
            <main className="mx-2 process-tracker-container">
                <section className="col-md-8 pt-4 processor-tracker-section">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Processor Name</th>
                                <th scope="col">IP Address</th>
                                <th scope="col">Processor Status</th>
                                <th scope="col">Utilization</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.renderProcessors() }
                        </tbody>
                    </table>
                </section>
                <section className="col-md-2">

                </section>
            </main>
        )
    }
}

const mapStateToProps = session => ({
    currentRoute: session.processors.currentProcessor
})

const mapDispatchToProps = dispatch => ({

})



export default connect(mapStateToProps, mapDispatchToProps)(ProcessTrackerContainer);