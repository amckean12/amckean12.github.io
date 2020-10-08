//Libraries
import React from 'react';

class SimulationSchedulerContainer extends React.Component {
    render(){
        return(
            <main className="container-fluid p-0 simulation-scheduler-container">
                <section className="row pt-5 border-bottom">
                    <div className="col-md-6">
                        <div className="dropdown d-flex justify-content-center">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Simulation Type</button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Multi Stage Flow</a>
                                <a className="dropdown-item" href="#">SWMM</a>
                            </div>
                        </div>
                        <button type="button" class="btn btn-outline-secondary">Secondary</button>
                    </div>
                    <div className="col-md-6 d-flex flex-column align-items-center">
                        <div className="button-wrapper w-50">
                            <button type="button" class="btn btn-outline-secondary">Select Model</button>
                        </div>
                        <div className="button-wrapper w-50">
                            <button type="button" class="btn btn-outline-secondary">Select Model</button>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}


export default SimulationSchedulerContainer;