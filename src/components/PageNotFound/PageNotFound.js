import React from "react";
import { useHistory } from 'react-router-dom';

function PageNotFound() {

    const history = useHistory();

    function historyGoBack () {
        return history.goBack();
    }

    return (
        <section className="pageNotFound">
            <h2 className="pageNotFound__tittle">404</h2>
            <h3 className="pageNotFound__subtittle">Страница не найдена</h3>
            <button type="button" className='pageNotFound__button' onClick={historyGoBack}>Назад</button>
        </section>
    );
  }
  
  export default PageNotFound;
  