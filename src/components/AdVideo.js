import React from 'react';
import YouTube from 'react-youtube';
import TheatersIcon from '@mui/icons-material/Theaters';

const AdVideo = ({parRatio}) => {
    
  
  return (
    <div>
        <div className="title">
            <div className="icon">
                <TheatersIcon/>       
            </div>
    <h2>Watch Our Self Introduction!</h2>
    </div>
    <div className='video-container'>
        <YouTube videoId="DkbSttH_LRk"  className={ parRatio<= 0.8 ? 'video' : ''}/>
    </div>
</div>
  )
}

export default AdVideo