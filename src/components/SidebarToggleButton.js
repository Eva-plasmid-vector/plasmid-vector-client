import React from 'react';
import SwitchLeftIcon from '@mui/icons-material/SwitchLeft';
import SwitchRightIcon from '@mui/icons-material/SwitchRight';
import {motion} from 'framer-motion'

const SidebarToggleButton = ({ onSidebar, showSidebar} ) => {
    
    
  return (
    <div className='operation'>
        <motion.button className="sidebar-actions" id="toggle-sidebar"
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

        onClick={
         onSidebar
          }
        >
         
           {showSidebar ? 
          <SwitchLeftIcon className='toggle-sidebar-icon' />
            :   <SwitchRightIcon className='toggle-sidebar-icon' />
            
            }
           
         
        </motion.button>
        
    </div>
  )
}

export default SidebarToggleButton