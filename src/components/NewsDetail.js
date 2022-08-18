import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import {motion} from 'framer-motion'

const NewsDetail = ({setPopNews, popNews, siteNews, parRatio}) => {
    const i = siteNews.length - 1;

  return (
    <motion.div 
    animate={{
        rotate: [0, 10, -10, 0],
        scale: 1.2
    }}
    
    className='news-detail'>
        <div className={ parRatio <= 0.8? 'news-detail-head-vert' : 'news-detail-head'}>

            <h1>{siteNews[i].title}</h1>

            <motion.div className='icon'
            whileHover={{scale: 1.2}}
            onClick={()=>setPopNews(!popNews)}
            >
                <CloseIcon/>
            </motion.div>
        </div>
        <div>
            <h5>{siteNews[i].detail}</h5>
            <h5>{siteNews[i].date}</h5>
        </div>
       

    </motion.div>
  )
}

export default NewsDetail