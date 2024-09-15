import React from 'react';

export default function CircleImage({ width, title, image }) {
  return (
    <>
      <div className={`${width}`}>
        <img src={image} alt={title} className='rounded-full object-contain aspect-square' />
      </div>
    </>
  );
}
