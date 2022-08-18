import  React, {useState} from 'react'

import PastRelease from './PastReleaseList'
import SiteNews from './SiteNews'

import {AnimatePresence, motion} from 'framer-motion'
import NaviButton from './NaviButton'
import OpenedNews from './OpenedNews'


const Sidebar = ({ pastRelease, showSidebar, siteNews, parRatio}) => {

    const [popNews, setPopNews] = useState(false)

  return (
    <AnimatePresence>
    {
        showSidebar && (
        <motion.div className='sidebar'
            initial={{width: 0,
                opacity: 0
                }}
            animate={{width: 200,
                opacity: 1
                }}
                exit={{width: 0,
                    opacity: 0
    
                }}
                transition={{
                    duration: 0.8
                }}
                >
                    <div className='sidebar-inside button'>
                       <NaviButton/>
                    </div>
    
                    <div className='sidebar-inside'>
                        <h2 className="sidebar-title">Site Log #{siteNews.length}</h2>
                        <SiteNews 
                        siteNews={siteNews}
                        setPopNews = {setPopNews}
                        popNews = {popNews}
                    
                        />
                    </div>
    
                    <div className='sidebar-inside'>
                        <h2 className="sidebar-title">Past Release</h2>
                        <PastRelease pastRelease={pastRelease} />
                    </div>

                    <OpenedNews popNews={popNews} setPopNews = {setPopNews} siteNews={siteNews} parRatio = {parRatio}/>
            </motion.div>
        )}
</AnimatePresence>
    
   
    
  )
}

export default Sidebar