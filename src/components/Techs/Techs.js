import LandingTittle from "../LandingTittle/LandingTittle";

function Techs () {
    return (
      <div className="container__techs">
            <LandingTittle tittle__text='Технологии'/>
            <h2 className='tittle__techs'>7 технологий</h2>
            <h3 className='subtittle__techs'>На курсе веб-разработки мы освоили технологии, которые применили<br/> в дипломном проекте.</h3>

            <div className='gridContainer__techs'>
                  <p className="grid__text grid__text__techs">HTML</p>
                  <p className="grid__text grid__text__techs">CSS</p>
                  <p className="grid__text grid__text__techs">JS</p>
                  <p className="grid__text grid__text__techs">React</p>
                  <p className="grid__text grid__text__techs">Git</p>
                  <p className="grid__text grid__text__techs">Express.js</p>
                  <p className="grid__text grid__text__techs">mongoDB</p>
            </div>
      </div>    
    );
  }
  
  export default Techs;