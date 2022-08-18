import React from 'react';
import '../css/homepage.css';
import { motion} from 'framer-motion'

// import Sidebar from '../components/Sidebar'
// import Header from '../components/Header'
// import SidebarToggleButton from "../components/SidebarToggleButton"
// import Footer from '../components/Footer'


import HomeWelcome from '../components/HomeWelcome'
import NewContent from '../components/NewContent';
import WebQuestion from '../components/WebQuestion';


const Home = ( {pastRelease} ) => {

  return (
    <motion.div 
    // initial={{width:0}}
    // animate={{width:"100%"}}
    // exit={{x: "100vw"}}
    initial={{opacity:0}}
    animate={{
      opacity:1,
      // rotate: [0, 45, 0]
    }}
    exit={{opacity: 0}}
    transition={{duration: 1}}
    className='main-content'
    >
              <HomeWelcome />
              <NewContent pastRelease={pastRelease}/>
              <WebQuestion/>
    </motion.div>
  )
}

export default Home