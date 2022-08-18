import React from 'react'

import HeadLogo from './HeadLogo';
import Source from './Source';
import SearchBar from './SearchBar';

const Header = ({ placeholder, pastRelease, parWidth }) => {
let logoIDResult = 'hel'
const logoIDTest = ()=>{
  if (parWidth <= 400){
    logoIDResult = 'headlogoimage-tiny'
  }else if (parWidth <= 1200) {
    logoIDResult = 'headlogoimage-phone'
  }else{
    logoIDResult = 'headlogoimage'
  }
}
logoIDTest()
// console.log(logoIDResult)

  return (
      <header>
        <HeadLogo logoContainerID={'headlogo'} logoID={
          logoIDResult
          // parWidth <= 900 ? 'headlogoimage-phone' : 'headlogoimage'
          }
          
          />
        <Source />
        <SearchBar placeholder={placeholder} 
       pastRelease ={pastRelease}
        />
        
      </header>
  )
}

export default Header