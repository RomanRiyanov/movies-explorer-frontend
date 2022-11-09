import React, { useEffect, useState } from "react";

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js'
function SearchForm({onMoviesFind}) {

  const [keyword, setKeyword] = useState('');

  function onSubmit(event){
    event.preventDefault();
    console.log('отправить фильм на поиск');

    onMoviesFind(keyword);
    
  }

    return (
        <form onSubmit={onSubmit} className="searchForm__form">
            <div className='searchForm__container'>
                <input onChange={event => setKeyword(event.target.value)} className="searchForm__input" value={keyword} placeholder='Фильм' /*required*//>
                <button type="submit" aria-label='Поиск' className='searchForm__submitButton'></button>
            </div>
            <FilterCheckbox/>
            <div className='searchform__line'></div>
        </form>
    );
  }
  
export default SearchForm;