import landingLogoPath from '../../images/landingLogo.svg';

function Promo() {
    return (
        <div className="promo_container">
          <h1 className='promo_text'>Учебный проект студента<br/>факультета Веб-разработки.</h1>
          <img className='promo_logo' src={landingLogoPath} alt='Лого-спираль'/>
        </div>
    );
  }
  
  export default Promo;
  