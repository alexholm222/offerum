import { useState } from 'react';
import './Header.scss';
import { Link } from "react-router-dom";

function Header({handleScroll}) {
  const[isDrop, setIsDrop] = useState(false);

  function dropDown() {
    if(isDrop) {
      setIsDrop(false);
    } else {
      setIsDrop(true);
    }
  }

  document.addEventListener("mousedown", (e) => {
    const target = e.target;
    if (!target.closest(`.header__menu`)) {
      setIsDrop(false);
    }
  })

  return (
    <div className='header'>
        <div className='header__logo'></div>
        <nav className='header__nav'>
          <Link to={'#'} className='header__link'>Главная</Link>
          <Link onClick={handleScroll} className='header__link'>Что даст обучение</Link>
          <Link className='header__link header__link_button'>
            <button className='header__button'>Личный кабинет</button>
          </Link>
        </nav>
        <button onClick={dropDown} className='header__button_nav'></button>
        <div className={`header__dropdown ${isDrop ? 'header__dropdown_active' : ''}`}>
          <div className={`header__menu ${isDrop ? 'header__menu_active' : ''}`}>
            <div className='header__box'>
              <div className='header__container'>
                <div className='header__logo'></div>
                <div onClick={dropDown} className='header__button_close'></div>
              </div>
              <Link onClick={dropDown} to={'#'} className='header__link'>Главная</Link>
              <Link onMouseUp={dropDown} onClick={handleScroll} className='header__link'>Что даст обучение</Link>
              <Link onClick={dropDown} className='header__link header__link_button'>
                <button className='header__button'>Личный кабинет</button>
              </Link>
            </div>  
          </div>
        </div>
      </div>
  )
};

export default Header;