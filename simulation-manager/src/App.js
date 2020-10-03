//Libraries
import React from 'react';

//Components
import Header from './header.jsx';

//Data
import config from './config.js';


function App() {
  return (
    <div className="App">
      <Header 
        headerConfig = {config.header}
      />
    </div>
  );
}

export default App;
