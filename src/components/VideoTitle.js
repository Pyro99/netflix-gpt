import { Info, PlayArrow } from '@mui/icons-material';
import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black aspect-video'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div className='my-4 md:m-0'>
        <button className='bg-white font-semibold text-black py-1 md:py-4 px-3 md:px-12 text-lg rounded-lg hover:bg-opacity-80'>
          <PlayArrow />
          {'  '}
          Play
        </button>
        <button className=' hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg mx-2'>
          <Info />
          {'  '} More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
