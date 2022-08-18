import React from 'react'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import {motion} from 'framer-motion';

const VRTour = () => {
  return (
    <a href='https://cloud.chan3d.com/scenes/40a21f0953a24b6e8d0d612abd242127/index.html'
      target="_blank" rel="noopener noreferrer"
      >
        <motion.div 
        whileHover={{
           x: 50
        }}
        whileTap={{
            scale: 0.8,
            x: -50
        }}
        className='vr-tour-ticket'> 
        <BubbleChartIcon/> Click to Join our VR Tour!
        <motion.div 
        className='vr-tour-ticket bottom'> </motion.div>
        </motion.div>
        
    </a>
  )
}

export default VRTour