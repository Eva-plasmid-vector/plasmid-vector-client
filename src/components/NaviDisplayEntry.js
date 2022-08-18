import React, {useState} from 'react'
import NaviImage from './NaviImage';

const NaviDisplayEntry = ({pastRelease, currentCat, naviFilter}) => {
    
  return (
    <>

        <div>
            {
                naviFilter.map((value, index)=>(
                   <a className='category-link' href={value.link} key={value.id +  Math.random(1000)} 
                   >
                        <div className="category-entry"  key={index * 20} 
                >
                           
                                <div className="category-entry-image-container"  key={value.id  +  Math.random(100)}>
                                    <NaviImage naviImageIndex={value.coverImage} />
                                    
                                </div>
                               
                                    <hr className="greenline" key={value.id +  Math.random(50)}/>
                                    <h2 key={value.id * Math.random(300)}>{value.title}</h2>
                                    <h4 key={value.id + Math.random(100)}>{value.author}</h4>
                                    <p className='naviDescription' key={value.id * Math.random(700)} > {value.description} </p>
                                    <div className="tags" key={value.id +  Math.random(10000)}>
                                        <p className='largetag' key={value.id +  Math.random(300)}>{value.type}</p>
                                        <h4 className='navi-time' key={value.id * Math.random(900)} >Last Edit: {value.lastEdit}</h4>
                                    </div>
                               
                        </div>
                   </a>
                ))
            }
        </div>
    
    </>
  
  )
}

export default NaviDisplayEntry

