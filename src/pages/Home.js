import React from 'react';
import '../css/homepage.css';
import { motion} from 'framer-motion'




import HomeWelcome from '../components/HomeWelcome';
import NewContent from '../components/NewContent';
import WebQuestion from '../components/WebQuestion';
import AdVideo from '../components/AdVideo';


const Home = ( {pastRelease, parRatio, phoneMessage} ) => {

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
      {phoneMessage && <motion.div
     initial={{
      opacity:0,
      
    }}
     animate={{
       opacity:1,
       scale: [1, 1.5, 1, 1.5, 1, 1.5, 1, 1.5, 1, 1.5, 1]
     }}
     exit={{opacity: 0,
      
    }}
     transition={{duration: 3}}
       className='phone-message'>{phoneMessage}</motion.div>}
              
              <HomeWelcome parRatio= {parRatio} />
              <AdVideo parRatio={parRatio}/>
              <NewContent pastRelease={pastRelease}/>
              <WebQuestion/>
    </motion.div>
  )
}

export default Home