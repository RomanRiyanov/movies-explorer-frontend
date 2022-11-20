import React, { useEffect, useState } from "react";

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js'
function SearchForm({
  onMoviesFind, 
  onShortFolmSelect,
  localStorageKeyword,
}) {

  const [keyword, setKeyword] = useState('');

  function onSubmit(event){
    event.preventDefault();
    localStorage.setItem('localStorageKeyword', keyword)

    onMoviesFind(keyword);
  }

  useEffect(() => {
    if (localStorage.getItem('localStorageKeyword')) {
      setKeyword(localStorage.getItem('localStorageKeyword'));
      onMoviesFind(localStorage.getItem('localStorageKeyword'));
    };
  }, [])

    return (
        <form onSubmit={onSubmit} className="searchForm__form">
            <div className='searchForm__container'>
                <input onChange={event => setKeyword(event.target.value)} className="searchForm__input" value={keyword} maxLength='100' placeholder='Фильм' required/>
                <button type="submit" aria-label='Поиск' className='searchForm__submitButton'></button>
            </div>
            <FilterCheckbox onShortFolmSelect={onShortFolmSelect}/>
            <div className='searchform__line'></div>
        </form>
    );
  }
  
export default SearchForm;