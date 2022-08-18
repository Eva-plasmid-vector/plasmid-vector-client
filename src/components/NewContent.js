import React from 'react'

import NewReleasesIcon from '@mui/icons-material/NewReleases';
import NewContentSlide from './NewContentSlide';

const NewContent = ({pastRelease}) => {
const parWidth = window.innerWidth;

  return (
    <div className='new-content'>
        <div className="title">
            <div className="icon">
                <NewReleasesIcon/>       
            </div>
            <h2>New Content</h2>
        </div>
        <div className={
          parWidth <=1000? 'slide-phone' : 'slide'
        }>
          <NewContentSlide pastRelease={pastRelease} displayIndex={pastRelease.length-1} />
          <NewContentSlide pastRelease={pastRelease} displayIndex={pastRelease.length-2} />
          <NewContentSlide pastRelease={pastRelease} displayIndex={pastRelease.length-3} />
        </div>
    </div>
  )
}

export default NewContent