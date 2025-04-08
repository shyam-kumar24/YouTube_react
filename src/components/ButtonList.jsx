import React from 'react'
import Button from './Button'

const list = ['All', 'News', 'Song', 'Video', 'React', 'Next', 'HTML', 'javascript', 'prachi', 'prabha', 'biswal', 'css']

const ButtonList = () => {
  return (
    <div className='flex'>
      {
        list.map((item) => (
          <Button name={item} key={item}/>
        ))
      }
      
    </div>
  )
}

export default ButtonList