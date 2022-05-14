import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./Global.css";
import Taskbar from "./components/Taskbar/Taskbar";
import UploadSounds from './pages/UploadSoundsPage';
import LandingPage from './pages/LandingPage';
import ActivateBoard from './pages/ActivateBoardPage';
import AssignTouchpads from './pages/AssignTouchpads';
import SetModePage from './pages/SetModePage';
import SetVolumePage from './pages/SetVolumePage';
import AboutNpathPage from './pages/AboutNPathPage';

//main runnable Front End program, run in terminal by navigating into Front End folder 
// and entering 'npm run' in the terminal 
//test with 'npm test'
//unless altered website will run on localhost port 3000

const App = () => {

  return (
    <>
    <Router>
    <Taskbar />
    <Routes>
    <Route exact path='/' element ={<LandingPage/>} />
    <Route exact path='/mode' element ={<SetModePage/>} />
    <Route exact path='/volume' element ={<SetVolumePage/>} />
    <Route exact path='/aboutnpath' element ={<AboutNpathPage/>} />
    <Route exact path='/uploadsounds' element ={<UploadSounds/>} />
    <Route exact path='/activateboard' element ={<ActivateBoard/>} />
    <Route exact path='/assigntouchpads' element ={<AssignTouchpads/>} />

    </Routes>
    </Router>
    </>
  );

 
}

export default App;
