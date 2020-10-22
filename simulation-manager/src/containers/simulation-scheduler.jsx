//Libraries
import React from 'react';


class SimulationSchedulerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            simulationType: "Simulation Type"
        }
        this.setMSF = this.setMSF.bind(this)
        this.setSWMM = this.setSWMM.bind(this)
    }

    setMSF = () => {
        this.setState({
            simulationType: "Multi Stage Flow"
        })
    }

    setSWMM = () => {
        this.setState({
            simulationType: "SWMM"
        })
    }


    render(){
        return(
            <main className="container-fluid p-0 w-100 simulation-scheduler-container">
                <section className="row w-100 pt-5 border-bottom">
                    <div className="col-md-6">
                        <div className="row p-4 d-flex justify-content-around">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.simulationType}</button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" onClick={this.setMSF}>Multi Stage Flow</a>
                                    <a className="dropdown-item" onClick={this.setSWMM}>SWMM</a>
                                </div>
                            </div>
                        </div>
                        <div className="input-group p-4 d-flex justify-content-around"> 
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile02"></input>
                                <label class="custom-file-label" for="inputGroupFile02">Select Plans</label>
                            </div>
                            <div class="input-group-append">
                                <span class="input-group-text" id="">Upload</span>
                            </div>
                        </div> 
                    </div>
                    <div className="col-md-6">
                        <div class="input-group p-4 d-flex justify-content-around">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile02"></input>
                                <label class="custom-file-label" for="inputGroupFile02">Select Model</label>
                            </div>
                            <div class="input-group-append">
                                <span class="input-group-text" id="">Upload</span>
                            </div>
                        </div>
                        <div className="button-wrapper d-flex justify-content-center p-4">
                            <button type="button" class="btn btn-outline-secondary">Add to List</button>
                        </div>
                    </div>
                </section>
                <section className="row w-100">
                    <div className="col-md-6">
                        <div className="plan-list__header">
                            <h3 className="plan-list__header-content p-3">Plan List</h3>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="plan-dependencies__header p-3">
                            <h3 className="plan-dependencies__header-content">Dependencies</h3>
                        </div>
                    </div>
                </section>
                <section className="row footer w-100">
                    
                </section>
            </main>
        )
    }
}


export default SimulationSchedulerContainer;