import {Link} from 'react-router-dom'; // импортируем Routes

import me from '../../images/me.jpg';

function AboutMe(){

  // возвращаем jsx разметку компонента
  return (
    <section className="aboutMe" id="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>

      <div className="aboutMe__articl-wrapper">
        <div className="aboutMe__articl">
          <h1 className="aboutMe__articl-title">Иван</h1>
          <p className="aboutMe__articl-liad">Фронтенд-разработчик, 32 года</p>
          <p className="aboutMe__articl-text">Я живу в Челябинске, закончил университет ЮУрГУ. Я люблю слушать музыку, а ещё увлекаюсь настольными и видео играми. Недавно начал кодить. После того, как прошёл курс по веб-разработке, ознакомтесь с моим аккаунтом Github.</p>
          <Link to="https://github.com/Chaosresing" className="aboutMe__articl-link hoverLink" target="_blank">Github</Link>
        </div>

        <img className="aboutMe__img" src={me} alt="Фотография Иван, веб-разработчика" ></img>

      </div>

    </section>
  );
}

// экспортируем компонент в основной код
export default AboutMe;