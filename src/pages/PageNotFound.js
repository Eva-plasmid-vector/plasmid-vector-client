import React from 'react';
import { motion} from 'framer-motion';

import '../css/pagenotfound.css'

import Hills from '../vectorImage/illustrations/hills.png'

const PageNotFound = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{
      opacity:1,
      // rotate: [0, 45, 0]
    }}
    exit={{opacity: 0}}
    transition={{duration: 1}}
    className='main-content'
    >
      <div className='PNF-container'>
      <div className='PFN-title-container'>
          <h1 className='PNF-title'>Sorry! We don't have the page you're looking for</h1>
          <motion.div className='PNF-button'
           whileHover={{
            rotate: [0, 5, -5, 0]
        }}
        transition={{type:"tween"}}
        whileTap={{
            scale: 0.8
        }}
          > 
          <a href="/"><h2 className='PNF-title'>Return Homepage</h2></a>
          </motion.div>
      </div>
      <img src={Hills} alt="hills" className='PNF-background'/>
      </div>

      
      </motion.div>
  )
}

export default PageNotFound