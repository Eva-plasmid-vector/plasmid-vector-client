import React from 'react'
import {motion} from 'framer-motion'

const ContentTitleSnippet = ({pastRelease}) => {
    const currContent = []
  
    pastRelease.map((value)=>{
      if (value.link == window.location.pathname){
        currContent.push(value.title, value.lastEdit, value.author, value.description)
      }
    //   console.log(currContent)
    })
  
    // console.log(window.location.pathname)
    
  return (
    <motion.div
    initial={{
        opcity: 0,
        width: 0
    }}
    animate={{
        opacity:1,
        width: "100%",
        rotate: [0,5,-5,0]
    }}
    
    transition={{duration:1}}
    className="content-title">
            <h1>{currContent[0]}</h1>
            <div className="authors">
                <h3 className="content-author">{currContent[2]}</h3>
            </div>
            <p id="date">{currContent[1]}</p>
    </motion.div>
  )
}

export default ContentTitleSnippet