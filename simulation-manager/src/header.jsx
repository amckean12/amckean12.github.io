import React from 'react';

class Header extends React.Component {
    render(){
        return(
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Wood.</a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item px-4">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item px-4">
                                <a class="nav-link" href="#">Link 2</a>
                            </li>
                            <li class="nav-item px-4">
                                <a class="nav-link" href="#">Link 3</a>
                            </li>
                            <li class="nav-item px-4">
                                <a class="nav-link" href="#">Link 4</a>
                            </li>
                            <li class="nav-item flex-right">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;