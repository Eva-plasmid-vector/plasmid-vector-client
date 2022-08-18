import React from 'react'

const Source = () => {
 
  return (
    <div className='source' >
        <ul className='head-left'>
            <li>
                <a className='asource'
                href={window.location.href}>
                  {window.location.pathname}
                </a>
                <a className='asource'
                href='/'>
                 Home
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Source