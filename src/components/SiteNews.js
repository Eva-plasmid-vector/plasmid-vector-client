import React from 'react'
import {motion} from 'framer-motion'


const SiteNews = ({siteNews, setPopNews, popNews}) => {
    const i = siteNews.length -1 ;

  return (
    <motion.div 
     whileHover={{
            scale:1.2,
            rotate: [0, 5, -5, 0],
            x: "20px",
            duration: 0.2
        }}
        transition={{
        type: "tween"
      }}
        whileTap={{
            scale: 0.8
        }}

    className='site-news'
    onClick={()=>setPopNews(!popNews)}
    >
        <h4 className='site-news-title'>{siteNews[i].title}</h4>
        <p className='site-news-text'>{siteNews[i].date}</p>

        <hr className='greenline'/>
    </motion.div>
  )
}

export default SiteNews