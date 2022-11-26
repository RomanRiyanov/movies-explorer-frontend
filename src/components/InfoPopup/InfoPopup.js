function InfoPopup ({isOpen, onClose, success}) {

    function handleCloseButton() {
        onClose();
    }

    return (
        <section className={`infoPopup ${isOpen && 'infoPopup_viewable'}`}>
            <div className={`infoPopup__window`}>
                <button type="button" onClick={handleCloseButton} className='button__closeToolPopup'></button>
                <h2 className='infoPopup__tittle'>{success ? 'Успешно' : 'Попробуйте ещё раз'}</h2>
            </div>
        </section>
    );
}

export default InfoPopup;