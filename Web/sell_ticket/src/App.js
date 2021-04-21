import './App.css';
import Header from './components/Header/Header';
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
import Deletestaff from './components/Deletestaff/Deletestaff';
import Deletebusroute from './components/Deletebusroute/Deletebusroute';
import Deletebus from './components/Deletebus/Deletebus';
import Home from './components/Home/Home';
import DieuHuongURL from './routes/DieuHuongURL';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Search from './components/Search/Search';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Menubar/>
        <DieuHuongURL/>
        </div>
    </Router>
      
    
    
  );
}

export default App;
