
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js'
function SearchForm() {

  function onSubmit(){
    localStorage.removeItem('jwt');
  }

  function handleChangeFilm() {

  }
  
    return (
        <form onSubmit={onSubmit} className="searchForm__form">
            <div className='searchForm__container'>
                <input onChange={handleChangeFilm} className="searchForm__input" placeholder='Фильм' />
                <button aria-label='Поиск' className='searchForm__submitButton' type="submit" ></button>
            </div>
            <FilterCheckbox/>
            <div className='searchform__line'></div>
        </form>
    );
  }
  
export default SearchForm;