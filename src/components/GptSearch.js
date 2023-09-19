import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { POSTER } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img
          className='h-screen object-cover md:h-auto'
          src={POSTER}
          alt='logo'
        />
      </div>
      <div className=''>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
