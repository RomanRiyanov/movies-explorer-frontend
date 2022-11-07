import LandingTittle from "../LandingTittle/LandingTittle";

function AboutProject() {
    return (
      <section className="container__about">
            <LandingTittle tittle__text='О проекте'/>
            <div className='gridContainer__about'>
                  <p className='grid__text grid__title_text'>Дипломный проект включал 5 этапов</p>
                  <p className='grid__text grid__title_text'>На выполнение диплома ушло 5 недель</p>
                  <p className='grid__text' id='second_row'>Составление плана, работу над бэкендом, вёрстку, добавление <br/> функциональности и финальные доработки.</p>
                  <p className='grid__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className='gridContainer__weeks'>
                  <p className="grid__text grid__text__blue">1 неделя</p>
                  <p className="grid__text grid__text__gray">4 недели</p>
                  <p className="grid__text grid__text__transparent">Back-end</p>
                  <p className="grid__text grid__text__transparent">Front-end</p>
            </div>
      </section>    
    );
  }
  
  export default AboutProject;
  