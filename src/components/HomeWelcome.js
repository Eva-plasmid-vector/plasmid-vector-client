import React, {useState} from 'react'

import HeadLogo from './HeadLogo';
import RotatePlasmid from './RotatePlasmid';
import {motion, transform} from 'framer-motion'

const HomeWelcome = () => {
    var greeting;
    let today = new Date();
    let timeNow = today.toTimeString();
    let hourMinuteNow = timeNow[0] + timeNow[1] + timeNow[3] + timeNow[4];

    if (hourMinuteNow > 2100){
        greeting = 'Good Night!';
    }else if(hourMinuteNow > 1730){
        greeting ='Good Evening!';
    } else if (hourMinuteNow > 1230){
        greeting = 'Good Afternoon!';
    } else if (hourMinuteNow > 0){
        greeting = 'Good Morning!';
    }else{
        greeting = 'Dear You';
    }

    const parWidth = window.innerWidth;
    // const [welcomeContentClass, setWelcomeContentClass] = useState('');

    // const checkRatio = ()=>{
    //     if (parWidth <= 700){
    //         setWelcomeContentClass('welcome-content-vert')
    //     }else{
    //         setWelcomeContentClass('welcome-content')
    //     }
    // };
    // checkRatio();

  return (
    
    <div className="welcome-page">
                    <div className="welcome-title">
                        <div id="welcome-title-top">
                            <h1>{greeting}</h1>
                        </div>
                        <div id="welcome-title-middle">
                            <h1>Welcome to</h1>
                        </div>
                      
                            <HeadLogo logoContainerID={'welcome-title-bottom'} logoID={'homepagelogo'} />
                            
                    
                        <hr className="greenline"/>
                    </div>

                   
                
                    <div className={
                        parWidth <= 700? 'welcome-content-vert' : 'welcome-content'
                    }>
                    <div className="green blush" />
                       <div id="welcome-content-top">
                            <RotatePlasmid/>
                           {/* <img src={tRNAImage} alt="tRNAImage" id='tRNAImage' />                         */}
                        </div>
                        <div id="welcome-content-bottom">
                            <p className="home-description">
                            Today, there are numerous 
                            <span 
                            className='home-intro green'> physical diseases and mental disorders </span>
                             that are 
                             <span className='home-intro green'> neglected/stigmatized/misunderstood </span>
                              by the public. Here, we want to use 
                              <span className='home-intro pink'> simple and intriguing examples, stories, and graphics </span>
                               to present them as thorough as possible. 
                            <span className='home-intro pink'> Like passing information between individual’s genome </span>, our
                             <span className='home-intro pink'> Plasmid Vector website </span> 
                             intends to become a medium that carries the knowledge of physical diseases and mental disorders, transfers that into accessible facts, and deciphers the language across different professions.  
                            </p>
                           
                        
                        </div>
                        <div className="pink blush" />
                    </div>
                   
               </div>
  )
}

export default HomeWelcome