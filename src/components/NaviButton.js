import React from 'react'
import CategoryIcon from '@mui/icons-material/Category';

import {motion} from 'framer-motion'


const NaviButton = () => {
  return (
    <a href="/navidisplay">
        <motion.button 
        whileHover={{
            scale:1.2,
            rotate: [0, 5, -5, 0]
        }}
        transition={{type:"tween"}}
        whileTap={{
            scale: 0.8
        }}

        className="navi-button"
         >
            <CategoryIcon className='icon'/>GO TO NAVI
        </motion.button>
    </a>
  )
}

export default NaviButton