//Libraries
import React from 'react';

class ActiveQueContainer extends React.Component {
    render(){
        return(
            <main className="mx-2 acitve-que-container">
                <section className="process-tracker-section pt-4">
                    <table className="table">
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
                    </table>
                </section>
            </main>
        )
    }
}


export default ActiveQueContainer;