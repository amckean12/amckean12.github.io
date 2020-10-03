import React from 'react';

class Header extends React.Component {
    render(){
        return(
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Wood.</a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav w-100">
                            <li class="nav-item px-4">
                                <a class="nav-link" href="#">Simulation Scheduler</a>
                            </li>
                            <li class="nav-item px-4">
                                <a class="nav-link" href="#">Active Que</a>
                            </li>
                            <li class="nav-item px-4">
                                <a class="nav-link" href="#">Process Tracker</a>
                            </li>
                            <li class="nav-item float-right">
                                <a class="nav-link" href="#">Settings</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;