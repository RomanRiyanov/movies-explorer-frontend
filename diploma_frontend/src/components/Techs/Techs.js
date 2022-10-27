import LandingTittle from "../LandingTittle/LandingTittle";

function Techs () {
    return (
      <div className="container_techs">
            <LandingTittle tittle_text='Технологии'/>
            <h2 className='tittle_techs'>7 технологий</h2>
            <h3 className='subtittle_techs'>На курсе веб-разработки мы освоили технологии, которые применили<br/> в дипломном проекте.</h3>

            <div className='gridContainer_techs'>
                  <p className="grid_text grid_text_blue">1 неделя</p>
                  <p className="grid_text grid_text_gray">4 недели</p>
                  <p className="grid_text_transparent">Back-end</p>
                  <p className="grid_text_transparent">Front-end</p>
            </div>
      </div>    
    );
  }
  
  export default Techs;
  