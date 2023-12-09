
import React, {useState} from 'react';
import OpenedProfile from './OpenedProfile';

const TeamProfile = ({vectorAuthorInfo, parRatio }) => {
  const [IntroDisplay, setIntroDisplay]  = useState("")
  const [openProfile, setOpenProfile] = useState(false)
  return (
    vectorAuthorInfo.map((value)=>(
      
            <div className="vector-member"
            key={Math.random(200)}
            onClick={()=>{
              setIntroDisplay(value.introduction)
              setOpenProfile(!openProfile)
              // console.log(IntroDisplay)
              // console.log(openProfile)
            }
            }
           
            >
                <div className="vector-member-image" id={value.memberID} key={Math.random(300)}
                
                ></div>
                <hr className='greenline'  key={Math.random(400)}/>
                <h3 key={Math.random(500)}>{value.name}</h3>
                <h5 key={Math.random(500)}><span className='content-in-text-span'>Major:</span> {value.major}</h5>
                <h5 key={Math.random(500)}><span className='content-in-text-span'>Education:</span> {value.education}</h5>
                <h5 key={Math.random(500)}><span className='content-in-text-span'>Alternative contact:</span> {value.alterEmail}</h5>
                <OpenedProfile IntroDisplay={IntroDisplay} openProfile={openProfile} vectorAuthorInfo={vectorAuthorInfo} parRatio={parRatio} />
            </div>      
  
    ))
   
  )
}

export default TeamProfile

                       