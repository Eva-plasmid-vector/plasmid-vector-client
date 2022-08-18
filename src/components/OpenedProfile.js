import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'

const OpenedProfile = ({openProfile, IntroDisplay, vectorAuthorInfo}) => {
  return (
    <AnimatePresence>{
    openProfile && (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:0.6}}
        exit={{opacity:0}}

        transition={{duration: 0.8}}

        className='opened-news-bg'>
            <div className='vector-member-intro-display' id={IntroDisplay}>
            </div>
        </motion.div>
   )
   }</AnimatePresence>
  )
}

export default OpenedProfile