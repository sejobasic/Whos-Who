import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-line'></div>
      <div className='footer-content'>
        <p>Developed by</p>
        <div>
          <a href='https://github.com/SPatel144' target='_blank'>
            Shyam Patel
          </a>
          <a href='https://github.com/Beizul' target='_blank'>
            Martin Hu
          </a>
          <a href='https://github.com/rhundal' target='_blank'>
            Rajdeep Hundal
          </a>
          <a href='https://github.com/sejobasic' target='_blank'>
            Sejo Basic
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
