import './Advantages.scss';

function Advantages({myRef}) {

  return (
    <section ref={myRef} className='advantages'>
      <div className='advantages__circle'></div>
      <div className='advantages__container'>
        <div className='advantages__blur'></div>
        <div className='advantages__blur advantages__blur_bottom'></div>
        <div className='advantages__circle advantages__circle_small'></div>
        <h2 className='advantages__title'>Что даст тебе обучение?</h2>
        <ul className='advantages__list'>
          <li className='advantages__item'>
            <div className='advantages__card'>
              <div className='advantages__icon advantages__icon_stars'></div>
              <p className='advantages__text'>Откроешь свой первый криптокошелек и научишься с ним работать</p>
            </div>
            <div className='advantages__card advantages__card_back'></div>
          </li>
          <li className='advantages__item'>
            <div className='advantages__card'>
              <div className='advantages__icon advantages__icon_glass'></div>
              <p className='advantages__text'>Поймёшь, как выбирать правильные дропы</p>
            </div>
            <div className='advantages__card advantages__card_back'></div>
          </li>
          <li className='advantages__item'>
            <div className='advantages__card'>
              <div className='advantages__icon advantages__icon_dollar'></div>
              <p className='advantages__text'>Построишь план по быстрому приумножению заработанных средств</p>
            </div>
            <div className='advantages__card advantages__card_back'></div>
          </li>
          <li className='advantages__item'>
            <div className='advantages__circle advantages__circle_blur'></div>
            <div className='advantages__card'>
              <div className='advantages__icon advantages__icon_eyes'></div>
              <p className='advantages__text'>Узнаешь кто такие холдеры и флипперы</p>
            </div>
            <div className='advantages__card advantages__card_back'></div>
          </li>
        </ul>
      </div>  
    </section>
  )
};

export default Advantages;