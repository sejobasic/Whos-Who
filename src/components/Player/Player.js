import React, { useState, useRef } from 'react'
import { Howl } from 'howler'
import {
  BsFillPlayCircleFill,
  BsPauseCircleFill,
  BsFillStopCircleFill,
} from 'react-icons/bs'

import './Player.css'

function Player({ song, index }) {
  const [volumeSlider, setVolumeSlider] = useState(0.5)
  const [seek, setSeek] = useState(0)
  const [toggle, setToggle] = useState(true)

  const sound = useRef(
    new Howl({
      src: [song.preview_url],
      html5: true,
      preload: true,
      volume: 0.5,
      onend: function () {
        setToggle(true)
        setSeek(0)
      },
    })
  )

  function handlePlaying() {
    if (!sound.current.playing()) {
      sound.current.play()
      setToggle(false)
    } else {
      sound.current.stop()
      setSeek(0)
      setToggle(true)
    }
  }

  function handlePause() {
    setToggle(true)
    sound.current.pause()
  }

  function handleSeek(e) {
    if (!sound.current.playing()) {
      setSeek(0)
    }
    setSeek(e.target.value)
    sound.current.pause()
    sound.current.seek(e.target.value * 10)
    sound.current.play()
    setToggle(false)
    if (e.target.value >= 3) {
      sound.current.stop()
      setToggle(true)
      setSeek(0)
    }
    if (e.target.value <= 0) {
      setToggle(false)
    }
  }

  function handleVolume(e) {
    setVolumeSlider(e.target.value)
    sound.current.volume(e.target.value)
  }

  if (index) {
    sound.current.stop()
  }

  return (
    <div className='player-container' style={{ zIndex: index && -1 }}>
      <div className='play-pause-btn'>
        <button className='player-btn' onClick={handlePlaying}>
          {toggle ? <BsFillPlayCircleFill /> : <BsFillStopCircleFill />}
        </button>
        <button className='player-btn' onClick={handlePause}>
          <BsPauseCircleFill />
        </button>
      </div>
      <div className='slider-container'>
        <input
          className='seek-slider'
          type='range'
          min='0'
          max='3'
          value={seek}
          style={{
            background: `linear-gradient(
            to right,
            var(--btn-color) ${seek * 30 + 10}%,
            var(--paragraph-text) ${seek * 30 + 10}%
      )`,
          }}
          step='0.01'
          onChange={handleSeek}
        />
        <input
          className='volume-slider'
          type='range'
          min='0'
          max='1'
          value={volumeSlider}
          style={{
            background: `linear-gradient(
            to right,
            var(--btn-color) ${volumeSlider * 100}%,
            var(--paragraph-text) ${volumeSlider * 100}%
  )`,
          }}
          step='0.01'
          onChange={handleVolume}
        />
      </div>
    </div>
  )
}

export default Player
