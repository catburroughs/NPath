import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./Global.css";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import Taskbar from "./components/Taskbar/Taskbar";
import SetVolume from './pages/SetVolume';
import UploadSounds from './pages/UploadSounds';
import SetMode from './pages/SetMode';
import LandingPage from './pages/LandingPage';
import ActivateBoard from './pages/ActivateBoard';


const App = () => {

  return (
    <>
    <Router>
    <BackgroundImage />
    <Taskbar />
    <Routes>
    <Route exact path='/' element ={<LandingPage/>} />
    <Route exact path='/setmode' element ={<SetMode/>} />
    <Route exact path='/setvolume' element ={<SetVolume/>} />
    <Route exact path='/uploadsounds' element ={<UploadSounds/>} />
    <Route exact path='/activateboard' element ={<ActivateBoard/>} />
    </Routes>
    </Router>
    </>
  );

 
}

export default App;
