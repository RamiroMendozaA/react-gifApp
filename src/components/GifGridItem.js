import React from 'react'

export const GifGridItem = ({title, imageUrl}) => {
  return (
    <div className="card animate__animated animate__fadeInLeft">
      <img
        src={imageUrl}
        alt={title}
      />
      <p>{title}</p>
    </div>
  )
};
