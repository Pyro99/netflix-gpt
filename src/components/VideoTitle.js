import { Info, PlayArrow } from '@mui/icons-material';
import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black aspect-video'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-white font-semibold text-black p-4 px-12 text-lg rounded-lg hover:bg-opacity-80'>
          <PlayArrow />
          {'  '}
          Play
        </button>
        <button className='bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg mx-2'>
          <Info />
          {'  '} More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
