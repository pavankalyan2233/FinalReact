import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home'
// import JsRegistration from './Pages/JsRegistration'
// import JsLogin from './Pages/JsLogin'
import Studentnav from './Pages/Studentnav'
import Userregistration from './Pages/Userregistration'
import Userlogin from './Pages/Userlogin'
import ResetPassword from './Pages/ResetPassword';
import Eresetpass from './Pages/Eresetpass'
import SamplePage from './Pages/sample';
import StudentProfile from './Pages/student-profile';
import ServiceFeedback from './Pages/service-feedback';
import AssignedHousekeeper from './Pages/assigned-housekeeper';
import HousekeeperDetails from './Pages/Housekeeper-Details';
import RequestService from './Pages/RequestService';
import AdminPage from './Pages/Adminpage';
import AddHousekeeper from './Pages/AddHousekeeper';
import AdminAssignHousekeeper from './Pages/AdminAssignHousekeeper';
import AdminRequests from './Pages/AdminRequests';
import AdminFeedback from './Pages/AdminFeedback';
import AdminHousekeeperDetails from './Pages/AdminHousekeeperdetails';
import AdminLogin from './Pages/Adminlogin';
import Adminregistration from './Pages/Adminregistration';
import About from './Pages/About';
import Contact from './Pages/Contact';
const App = () => {
  return (
    <BrowserRouter>

      <Routes>
      <Route path="/" element={<Home />} />
         <Route path="/Studentnav" element={<Studentnav/>} /> 
        <Route path="/userregistration" element={<Userregistration/>} /> 
        <Route path="/userlogin" element={<Userlogin />} /> 

        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/Eresetpass" element={<Eresetpass />} />
        <Route path="/sample" element={<SamplePage/>}/>
        <Route path="/student-profile" element={<StudentProfile/>}/>
        <Route path="/service-feedback" element={<ServiceFeedback/>}/>
        <Route path="/assigned-housekeeper" element={<AssignedHousekeeper/>}/>
        <Route path="/housekeeper-details" element={<HousekeeperDetails/>}/>
        <Route path="/RequestService" element={<RequestService/>}/>
        <Route path="/adminPage" element={<AdminPage/>}/>
        
        <Route path="/addhousekeeper" element={<AddHousekeeper/>}/>
        <Route path="/adminassignhousekeeper" element={<AdminAssignHousekeeper/>}/>
        <Route path="/adminrequests" element={<AdminRequests/>}/>
        <Route path="/adminfeedback" element={<AdminFeedback/>}/>
        <Route path="/adminhousekeeperdetails" element={<AdminHousekeeperDetails/>}/>\
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/adminregistration" element={<Adminregistration/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App