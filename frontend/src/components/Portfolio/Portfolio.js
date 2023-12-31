import {Link} from 'react-router-dom'; // импортируем Routes

import row from '../../images/row.svg';

// в даном компоненте мы не принимаем props аргумент
function Portfolio(){

  // возвращаем jsx разметку компонента
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>

      <ul className="portfolio__spisok">
    
        <Link to="https://github.com/Chaosresing" className="portfolio__spisok-item hoverLink" target="_blank">Статичный сайт 
          <img className="portfolio__spisok-img" src={row} alt="Иконка стрелочки"/>
        </Link>
        <Link to="https://github.com/Chaosresing" className="portfolio__spisok-item hoverLink" target="_blank">Адаптивный сайт
          <img className="portfolio__spisok-img" src={row} alt="Иконка стрелочки"/>
        </Link>
        <Link to="https://github.com/Chaosresing" className="portfolio__spisok-item hoverLink" target="_blank">Одностраничное приложение
          <img className="portfolio__spisok-img" src={row} alt="Иконка стрелочки"/>
        </Link>
      </ul>

    </section>
  );
}

// экспортируем компонент в основной код
export default Portfolio;