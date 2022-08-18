import './css/App.css';
import './css/main.css';
import './css/content.css';

import { useState } from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import AnimatedLocation from './components/AnimatedLocation';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SidebarToggleButton from "./components/SidebarToggleButton";
import Footer from './components/Footer';


import pastRelease from './data/pastRelease.json';
import vectorAuthorInfo from './data/vectorAuthorInfo.json';
import siteNews from './data/siteNews.json';

function App() {

  const [showSidebar, setShowSidebar] = useState(true);
  const [currentCat, setCurrentCat] = useState('');

  return(
    <>
     <Header placeholder={'Enter Key Words...'} pastRelease={pastRelease}/>
        <div className='main-container'>

         
          <Sidebar
          
           pastRelease={pastRelease} setCurrentCat={setCurrentCat} showSidebar={showSidebar} siteNews={siteNews}/>
  

           <SidebarToggleButton 

            onSidebar = {()=>setShowSidebar(!showSidebar)}
            showSidebar = {showSidebar}
            />


    <div className='main-view'>
      <Router>

        <AnimatedLocation pastRelease={pastRelease} setCurrentCat={setCurrentCat} currentCat={currentCat} vectorAuthorInfo={vectorAuthorInfo}/>
          
      </Router>
     
      
       <Footer></Footer>
      </div>
        </div>
    </>

        

  )

}

export default App;
