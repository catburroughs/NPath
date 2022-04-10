import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./Global.css";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import Taskbar from "./components/Taskbar/Taskbar";
import SetVolume from './pages/SetVolume';
import UploadSounds from './pages/UploadSounds';
import LandingPage from './pages/LandingPage';
import ActivateBoard from './pages/ActivateBoard';
import ShowMode from './pages/ShowMode';
import AssignTouchpads from './pages/AssignTouchpads';
import SetModePage from './pages/SetModePage';


const App = () => {

  return (
    <>
    <Router>
    <Taskbar />
    <Routes>
    <Route exact path='/' element ={<LandingPage/>} />
    <Route exact path='/setmode' element ={<SetModePage/>} />
    <Route exact path='/showmode' element ={<ShowMode/>} />
    <Route exact path='/setvolume' element ={<SetVolume/>} />
    <Route exact path='/uploadsounds' element ={<UploadSounds/>} />
    <Route exact path='/activateboard' element ={<ActivateBoard/>} />
    <Route exact path='/assigntouchpads' element ={<AssignTouchpads/>} />

    </Routes>
    </Router>
    </>
  );

 
}

export default App;
