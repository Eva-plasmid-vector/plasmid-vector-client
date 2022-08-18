import React from 'react'

const NaviImage = ({naviImageIndex}) => {
    const naviImage = require('../webImage/' + naviImageIndex)
  return (
    <img src={naviImage} alt="naviImage" className='category-entry-image'/>
  )
}

export default NaviImage