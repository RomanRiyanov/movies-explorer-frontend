import {
    Link,
  } from 'react-router-dom';

function InfoPopup ({isOpen, onClose, success}) {

    function handleCloseButton() {
        console.log ('закрыть попап');
        onClose();
    }

    return (
        <section className={`infoPopup ${isOpen && 'infoPopup_viewable'}`}>
            <div className={`infoPopup__window`}>
                <button type="button" onClick={handleCloseButton} className='button__closeToolPopup'></button>
                <h2 className='infoPopup__tittle'>{success ? 'Успешно' : 'Попробуйте ещё раз'}</h2>
                {/* <Link className='infoPopup__link' to='/signin'>Войти</Link>
                <Link className='infoPopup__link' to='/main'>Главная</Link> */}
            </div>
        </section>
    );
}

export default InfoPopup;