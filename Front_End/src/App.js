import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./Global.css";
import Taskbar from "./components/Taskbar/Taskbar";
import UploadSounds from './pages/UploadSounds';
import LandingPage from './pages/LandingPage';
import ActivateBoard from './pages/ActivateBoard';
import AssignTouchpads from './pages/AssignTouchpads';
import SetModePage from './pages/SetModePage';
import SetVolumePage from './pages/SetVolumePage';


const App = () => {

  return (
    <>
    <Router>
    <Taskbar />
    <Routes>
    <Route exact path='/' element ={<LandingPage/>} />
    <Route exact path='/mode' element ={<SetModePage/>} />
    <Route exact path='/volume' element ={<SetVolumePage/>} />
    <Route exact path='/uploadsounds' element ={<UploadSounds/>} />
    <Route exact path='/activateboard' element ={<ActivateBoard/>} />
    <Route exact path='/assigntouchpads' element ={<AssignTouchpads/>} />

    </Routes>
    </Router>
    </>
  );

 
}

export default App;
