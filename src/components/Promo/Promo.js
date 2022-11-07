import landingLogoPath from '../../images/landingLogo.svg';

function Promo() {
    return (
        <section className="promo__container">
          <h1 className='promo__text'>Учебный проект студента<br/>факультета Веб&nbsp;-&nbsp;разработки.</h1>
          <img className='promo__logo' src={landingLogoPath} alt='Лого-спираль'/>
        </section>
    );
  }
  
  export default Promo;
  