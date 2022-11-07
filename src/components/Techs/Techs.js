import LandingTittle from "../LandingTittle/LandingTittle";

function Techs () {
    return (
      <section className="container__techs">
            <LandingTittle tittle__text='Технологии'/>
            <h2 className='tittle__techs'>7 технологий</h2>
            <h3 className='subtittle__techs'>На курсе веб-разработки мы освоили технологии, которые применили<br/> в дипломном проекте.</h3>
            <ul className='gridContainer__techs'>
                  <li className="grid__text_techs">
                        <p className="grid__text">HTML</p>
                  </li>
                  <li className="grid__text_techs">
                        <p className="grid__text">CSS</p>
                  </li>
                  <li className="grid__text_techs">
                        <p className="grid__text">JS</p>
                  </li>
                  <li className="grid__text_techs">
                        <p className="grid__text">React</p>
                  </li>
                  <li className="grid__text_techs">
                        <p className="grid__text">Git</p>
                  </li>
                  <li className="grid__text_techs">
                        <p className="grid__text">Express.js</p>
                  </li>
                  <li className="grid__text_techs">
                        <p className="grid__text">mongoDB</p>
                  </li>
            </ul>
      </section>    
    );
  }
  
  export default Techs;