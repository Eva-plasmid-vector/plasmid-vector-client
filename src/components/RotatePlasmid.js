import React from 'react'
import {motion} from 'framer-motion'

const RotatePlasmid = () => {
    const rotatePlasmid = require('../vectorImage/logos/rotate-plasmid.png'); 

  return (
    <motion.div 
    whileHover={
      {rotate: 360 ,
        scale: 1.2,
      translateY:  [0, -100, 0]
      }
  }
 
  transition={{
      type: "tween",
      duration: 0.7
  }}
    >
        <img src={rotatePlasmid} alt="rotatePlasmid" className='plasmid-container'/>
    </motion.div>
  )
}

export default RotatePlasmid