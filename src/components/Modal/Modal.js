import React from 'react'
import Confetti from 'react-confetti'
import { Link } from 'react-router-dom'
import './Modal.css'

function Modal({ msg, confetti, modalBg}) {
  return (
    <div className='modal-container' style={{ background: modalBg && 'rgba(255, 0, 0, 0.219)'}}>
      {confetti && <Confetti colors={['#7f5af0', '#987cee', '#94a1b2', '#FFD700']} />}
      <div className='modal' style={{animation: modalBg && 'shake 0.5s'}}>
        <h2>{msg}</h2>
        <Link to='/'>
        <button>Play Again</button>
        </Link>
      </div>
    </div>
  )
}

export default Modal