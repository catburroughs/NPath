//import logo from './logo.svg';
import { useState, useEffect } from "react";
import "./App.css";
import Taskbar from "./components/Taskbar/Taskbar";
import GetVolume from "./components/test_comp/GetVolume";
//import TestComp from './components/test_comp/TestComp';

function App() {
  const [volume, setVolume] = useState([]);

  // Modify the current state by setting the new data to
  // the response from the backend
  useEffect(() => {
    fetch("http://localhost:5000/frontend", {
      methods: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setVolume(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Taskbar />
  );

  /*
  return (
    <>
    <div className='Taskbar_Full'>Menu</div>
    <div className="App container m-4">
    <div className="row">
    <div className="text-center">
    <h1>NPath Project.</h1>
    </div>
  </div>

    <GetVolume
    volume = {volume}
    />

  

  </div>
  </>
   // <div className="App">
   //   <header className="App-header">
    //    <img src={logo} className="App-logo" alt="logo" />
     //   <p>
    //      Edit <code>src/App.js</code> and Al has wonderful hair.
      //  </p>

      //  <TestComp name={response}/>
      //  <a
     //     className="App-link"
       //   href="https://reactjs.org"
        //  target="_blank"
      //    rel="noopener noreferrer"
      //  >
       //   Learn React
     //   </a>
     // </header>
   // </div>
  );*/
}

export default App;
