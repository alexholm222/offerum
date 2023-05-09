import './Main.scss';
import Header from '../Header/Header';

function Main({openModal, handleScroll}) {
  return(
    <section className='main'>
      <div className='main__blur'></div>
      <Header handleScroll={handleScroll}/>
      <div className='main__content'>
        <div className='main__image'></div>
        <div className='main__container'>
          <h2 className='main__title'>Не упусти <br></br>возможность войти <br></br>в <span>прибыльную нишу</span></h2>
          <div className='main__image_mobile'></div>
          <p className='main__text'>Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
          <button onClick={openModal} className='main__button'>Начать зарабатывать на NFT</button>
        </div>
      </div>
    </section>
  )
};

export default Main;