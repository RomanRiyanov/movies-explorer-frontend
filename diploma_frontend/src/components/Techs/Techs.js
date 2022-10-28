import LandingTittle from "../LandingTittle/LandingTittle";

function Techs () {
    return (
      <div className="container_techs">
            <LandingTittle tittle_text='Технологии'/>
            <h2 className='tittle_techs'>7 технологий</h2>
            <h3 className='subtittle_techs'>На курсе веб-разработки мы освоили технологии, которые применили<br/> в дипломном проекте.</h3>

            <div className='gridContainer_techs'>
                  <p className="grid_text grid_text_techs">HTML</p>
                  <p className="grid_text grid_text_techs">CSS</p>
                  <p className="grid_text grid_text_techs">JS</p>
                  <p className="grid_text grid_text_techs">React</p>
                  <p className="grid_text grid_text_techs">Git</p>
                  <p className="grid_text grid_text_techs">Express.js</p>
                  <p className="grid_text grid_text_techs">mongoDB</p>
            </div>
      </div>    
    );
  }
  
  export default Techs;