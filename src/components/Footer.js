import React from 'react'
import LinecircleBottom from '../vectorImage/logos/linecircleBottom.png'

const Footer = () => {
  return (
    <footer>
      <div className='footer-top'>
           <h3 id="mission-title">Our Mission</h3>
           <blockquote id="mission-text">
              "Store, express, and transmit information about commonly misunderstood diseases"
          </blockquote>
      </div>
      <div className='footer-bottom'>
        <div className='footer-logo' >
          <img src={LinecircleBottom} alt="linecircileBottom" id='linecircleBottom' />
        </div>
       <div className='footer-team'>
          <div className='footer-contact' >
                <h3>Vector Team</h3>
                <p><a href="/vectorteam">Click to Learn More</a></p>
            </div>
            <div className="footer-email">
                <h3>Contact Us</h3>
                <p> Email Address: <a href="mailto: official@plasmidvector.com">official@plasmidvector.com</a></p>
            </div>
       </div>
      </div>
    </footer>
  )
}

export default Footer