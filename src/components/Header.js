import React from 'react'

import HeadLogo from './HeadLogo';
import Source from './Source';
import SearchBar from './SearchBar';

const Header = ({ placeholder, pastRelease }) => {

  return (
      <header>
        <HeadLogo logoContainerID={'headlogo'} logoID={'headlogoimage'} />
        <Source />
        <SearchBar placeholder={placeholder} 
       pastRelease ={pastRelease}
        />
        
      </header>
  )
}

export default Header