import React from 'react'

function VideoCard({info}) {

  const {snippet, statistics} = info
  const {channelTitle, title, thumbnails} = snippet

  return (
    <div className='p-2 m-2 shadow-lg w-80'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="" />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard