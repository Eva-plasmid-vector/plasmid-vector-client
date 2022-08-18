import React from 'react'


const PastReleaseList = ({pastRelease}) => {

  return (


    <div className='sidebar-inside'>
      {pastRelease.map((value)=>(
         <a key={value.id} className='past-release' href={value.link} > {value.title} </a>
      )
     )}

      {/* <PastReleaseContent key={value.id} categoryContent = {pastRelease.categoryContent} /> */}
    </div>
  )
}



export default PastReleaseList