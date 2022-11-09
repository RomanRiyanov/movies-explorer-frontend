import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js'
function SearchForm() {

  function onSubmit(event){
    event.preventDefault();
    console.log('отправить фильм на поиск');
  }

  function handleChangeFilm() {

  }

    return (
        <form onSubmit={onSubmit} className="searchForm__form">
            <div className='searchForm__container'>
                <input onChange={handleChangeFilm} className="searchForm__input" placeholder='Фильм' required/>
                <button type="submit" aria-label='Поиск' className='searchForm__submitButton'></button>
            </div>
            <FilterCheckbox/>
            <div className='searchform__line'></div>
        </form>
    );
  }
  
export default SearchForm;