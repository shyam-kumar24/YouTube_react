import React from 'react'

function ChatMessage({name,message}) {
  return (
    <div className='flex gap-3 items-center'>
        <img
          className="h-5 rounded-2xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVR3TjkaFI32k7M8OGMye32jOxry45evTmjw&s"
          alt=""
        />
        <span className='font-bold'>{name}: </span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage