
import React from 'react'
import { motion} from 'framer-motion'

const NewContentSlide = ({pastRelease, displayIndex}) => {
    const coverImage = require('../webImage/'+ pastRelease[displayIndex].coverImage);

  return (
     
          <a href={pastRelease[displayIndex].link} >
              <motion.div 
              whileHover={{rotate:[0, 10, 0, -10, 0]}}
              transition={{duration:0.5}}
              className='new-content-pad'>
                    <div className='new-content-image-container'>
                        <img src={coverImage} alt="coverImage" className="new-content-image"/>
                    </div>
                    <hr className="greenline"/>
                   <div className='content-info'>
                        <h4>{pastRelease[displayIndex].title}</h4>
                        <p className='content-info-author'>Content Author: {pastRelease[displayIndex].author}</p>
                   </div>
                    <div className="tags">
                        <p className="tag">{pastRelease[displayIndex].type}</p>
                    </div>
              </motion.div>
          </a>
  )
}

export default NewContentSlide