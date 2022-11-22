import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js'
function SearchForm({
  onMoviesFind, 
  onShortFolmSelect,
  localStorageKeyword,
}) {

  const [keyword, setKeyword] = useState('');
  const [isInputValid, setIsInputValid] = useState(false);

  const keyword__error = isInputValid ? 'keyword_error' : 'keyword_error keyword_error_visible';
  const searchForm__submitButton = isInputValid ? 'searchForm__submitButton' : 'searchForm__submitButton searchForm__submitButton_disabled';

  function searchFormValidation (keyword) {
    if (keyword !== '' && keyword.length <= 100) {
      setIsInputValid(true);
    }
    else setIsInputValid(false);
  }

  function onSubmit(event){
    event.preventDefault();
    if (isInputValid) {
      localStorage.setItem('localStorageKeyword', keyword)
      onMoviesFind(keyword);
    }
    else setIsInputValid(false);    
  }

  useEffect(() => {
    if (localStorage.getItem('localStorageKeyword')) {
      setKeyword(localStorage.getItem('localStorageKeyword'));
      onMoviesFind(localStorage.getItem('localStorageKeyword'));
      searchFormValidation (localStorage.getItem('localStorageKeyword'));
    };
  }, [])

    return (
        <form onSubmit={onSubmit} className="searchForm__form">
            <div className='searchForm__container'>
                <input onChange={event => { searchFormValidation(event.target.value); setKeyword(event.target.value)} } className="searchForm__input" value={keyword} placeholder='Фильм'/>
                <span className={keyword__error}>Нужно ввести ключевое слово</span>
                <button type="submit" aria-label='Поиск' disabled={!isInputValid} className={searchForm__submitButton}></button>
            </div>
            <FilterCheckbox onShortFolmSelect={onShortFolmSelect}/>
            <div className='searchform__line'></div>
        </form>
    );
  }
  
export default SearchForm;