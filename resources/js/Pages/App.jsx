import React from 'react';
import { Head } from '@inertiajs/react';
import {Landingpage,  Footer, About, Service, User, EditProfile, Jobpost, Jobs,Chat} from './';
 import {Navbar, Separator, Process, About2, Form,Login } from '../Components';
import './App.css';
import Lastfooter from '../Components/last-footer/Lastfooter';

function App() {  
 
  return (
    
     <div className="App">

        <Navbar />
        <Landingpage />
        <Separator />
        <Service />
        <Process />
        <About />
        <About2 />
        <Footer />
        <Lastfooter/>
        {/* <Jobs/> */}
        {/* <Login /> */}
        {/* <User />
         */}
         {/* <EditProfile/>  */}
         {/* <Jobpost/>      */}
         <Chat/>
        <Head title="Home" />
    </div>
    
  );
}

export default App;
