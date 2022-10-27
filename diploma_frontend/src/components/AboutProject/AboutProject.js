import LandingTittle from "../LandingTittle/LandingTittle";

function AboutProject() {
    return (
      <div className="container_about">
            <LandingTittle tittle_text='О проекте'/>
            <div className='gridContainer_about'>
                  <p className='grid_text grid_title_text'>Дипломный проект включал 5 этапов</p>
                  <p className='grid_text grid_title_text'>На выполнение диплома ушло 5 недель</p>
                  <p className='grid_text'>Составление плана, работу над бэкендом, вёрстку, добавление <br/> функциональности и финальные доработки.</p>
                  <p className='grid_text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className='gridContainer_weeks'>
                  <p className="grid_text grid_text_blue">1 неделя</p>
                  <p className="grid_text grid_text_gray">4 недели</p>
                  <p className="grid_text_transparent">Back-end</p>
                  <p className="grid_text_transparent">Front-end</p>
            </div>
      </div>    
    );
  }
  
  export default AboutProject;
  