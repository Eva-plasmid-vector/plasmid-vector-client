import React from 'react'
import '../css/navi.css'
import { motion} from 'framer-motion'


import NaviDisplayEntry from '../components/NaviDisplayEntry'
import NaviList from '../components/NaviList'

const NaviDisplay = ({pastRelease, setCurrentCat, currentCat }) => {

    const naviFilter = pastRelease.filter((value)=>{
      return value.type.includes(currentCat);
  })
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{
      opacity:1,
      // rotate: [0, 45, 0]
    }}
    exit={{opacity: 0}}
    transition={{duration: 1}}
     className='main-content'>

         <div className="category-title">
            <h1>{currentCat !== '' ? 
            currentCat :
            'All' } ({naviFilter.length})</h1>
            
            <hr className="greenline"/>
          <NaviList pastRelease={pastRelease} setCurrentCat={setCurrentCat} currentCat={currentCat}/>
        </div>
        <div className='category-list'>
            <NaviDisplayEntry currentCat={currentCat} pastRelease={pastRelease}  naviFilter={naviFilter} />
        </div>

       
    </motion.div>
  )
}

export default NaviDisplay