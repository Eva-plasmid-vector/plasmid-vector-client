
import React, {useState} from 'react';
import OpenedProfile from './OpenedProfile';

const TeamProfile = ({vectorAuthorInfo}) => {
  const [IntroDisplay, setIntroDisplay]  = useState("")
  const [openProfile, setOpenProfile] = useState(false)
  return (
    vectorAuthorInfo.map((value)=>(
      
            <div className="vector-member"
            key={Math.random(200)}
            onClick={()=>{
              setIntroDisplay(value.introduction)
              setOpenProfile(!openProfile)
              console.log(IntroDisplay)
              console.log(openProfile)
            }
            }
           
            >
                <div className="vector-member-image" id={value.memberID} key={Math.random(300)}
                
                ></div>
                <hr className='greenline'  key={Math.random(400)}/>
                <h3 key={Math.random(500)}>{value.name}</h3>
                <OpenedProfile IntroDisplay={IntroDisplay} openProfile={openProfile} vectorAuthorInfo={vectorAuthorInfo} />
            </div>      
  
    ))
   
  )
}

export default TeamProfile

                       