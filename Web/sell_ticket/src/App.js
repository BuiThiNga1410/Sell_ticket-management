import './App.css';

import Menubar from './components/Menubar/Menubar';
import Pagination from './components/Pagination/Pagination';
import Stafftable from './components/Stafftable/Stafftable';
import Formaddstaff from './components/Formaddstaff/Formaddstaff';
import Busroutetable from './components/Busroutetable/Busroutetable';
import Formaddbusroute from './components/Formaddbusroute/Formaddbusroute';
import Bustable from './components/Bustable/Bustable';
import Formaddbus from './components/Formaddbus/Formaddbus';
import Formupdatebus from './components/Formupdatebus/Formupdatebus';
import Formupdatebusroute from './components/Formupdatebusroute/Formupdatebusroute';
import Formupdatestaff from './components/Formupdatetaff/Formupdatestaff';
import Home from './components/Home/Home';
import DieuHuongURL from './routes/DieuHuongURL';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header_admin from './components/Header_admin/Header';


function App() {
  return (
    <Router>
      <div className="App">
        <Header_admin/>
        <Menubar/>
        <DieuHuongURL/>
        </div>
    </Router>
      
    
  ) 
  }

export default App;