import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import "./App.css";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import Taskbar from "./components/Taskbar/Taskbar";
import SetVolume from './pages/SetVolume';
import UploadSounds from './pages/UploadSounds';
import SetMode from './pages/SetMode';
import LandingPage from './pages/LandingPage';


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
    </Routes>
    </Router>
    </>
  );

 
}

export default App;
