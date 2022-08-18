import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import NewsDetail from './NewsDetail'

const OpenedNews = ({popNews, setPopNews, siteNews, parRatio}) => {
  return (
      
       <AnimatePresence>
       { popNews &&(
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:0.9}}
        exit={{opacity:0}}

        transition={{duration: 0.5}}

        className='opened-news-bg'>

           <NewsDetail setPopNews = {setPopNews} popNews = {popNews} siteNews={siteNews} parRatio = {parRatio}/>

        </motion.div>
        )}
        </AnimatePresence>
   
  )
}

export default OpenedNews