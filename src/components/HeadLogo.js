import React from 'react'

const HeadLogo = ({logoContainerID, logoID}) => {
    const vectorLogo = require('../vectorImage/logos/vectorLogo.png'); 

  return (

    <a href="/vectorteam" >
      <div id={logoContainerID}  >
        <img src={vectorLogo} alt='vector-logo' id={logoID} className='logo-top'/>
    </div>
    </a>
  )
}

export default HeadLogo