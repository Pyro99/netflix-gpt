import React, { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMBD = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' +
        movie +
        '&include_adult=false&language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      'Act as a Movie Recommendation System and suggest some movies for the query' +
      searchText.current.value +
      '. Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result : Golmaal, Mimi, Don, Bareily Ki Barfi, Luka Chupi';

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    const gptMovies = gptResults.choices[0]?.message.content.split(',');

    const promiseArray = gptMovies.map((movie) => searchMovieTMBD(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className='pt-[45%] md:pt-[10%] flex justify-center'>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg'
      >
        <input
          ref={searchText}
          type='text'
          className='p-4 m-4 col-span-9 rounded-lg'
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className='text-sm py-1 px-2 md:text-base md:py-2 m-4 bg-red-700 text-white rounded-lg col-span-3 '
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
