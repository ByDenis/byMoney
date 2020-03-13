import React from 'react';
import './App.css';
import AppCount from './AppCount';

function App(props) {
 // console.log(props);
  return (
    <div className="App">
      <header className="App-header">
          <AppCount props={props}/>
      </header>
    </div>
  );
}

export default App;
