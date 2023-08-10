import React from 'react';
import { Head } from '@inertiajs/react';
import {Landingpage,  Footer, About, Service, Help} from './';
 import {Navbar, Separator, Process, About2, Form,Login } from '../Components';
import './App.css';
import Lastfooter from '../Components/last-footer/Lastfooter';

function App(nums) {  
 console.log(nums)
  return (
    
     <div className="App">

        <Navbar />
        <Landingpage />
        <Separator />
        <Service />
        <Process />
        <About />
        <About2 props={nums}/>
        <Footer />
        <Lastfooter/>
        
       
        
        <Head title="Home" />
    </div>
    
  );
}

export default App;
