import './Modal.scss'

function Modal({isOpenModal, setIsOpenModal}) {
  
  function closeModal() {
    setIsOpenModal(false);
  }

  document.addEventListener("mousedown", (e) => {
    const target = e.target;
    if (!target.closest(`.modal__box`)) {
      setIsOpenModal(false);
    }
  })

  return(
    <div className={`modal ${isOpenModal ? 'modal_active' : ''}`}>
        <div className='modal__box'>
          <div className='modal__circle'></div>
          <div className='modal__container'>
            <h2 className='modal__title'>Начни прямо сейчас!</h2>
            <p className='modal__text'>Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
            <form noValidate className='modal__form'>
              <input placeholder='Ваш email' className='modal__input' type='email'></input>
              <button className='modal__button modal__button_submit' type='submit'>Оплатить</button>
            </form>
          </div>
          <button onClick={closeModal} className='modal__button modal__button_close'></button>
        </div> 
    </div>
  )
};

export default Modal;