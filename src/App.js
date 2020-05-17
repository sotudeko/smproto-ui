import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MetricsApp from './component/MetricsApp';
import ApplicationsGraphApp from './component/ApplicationsGraphApp';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="container">
        <ApplicationsGraphApp />
      </div>
    );
  }
}


export default App;
