import './App.css';
import { useState, useRef } from 'react';
import Main from '../Main/Main';
import Advantages from '../Advantages/Advantages';
import Modal from '../Modal/Modal';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const myRef = useRef(null);
  
  function openModal() {
    setIsOpenModal(true);
  }

  function handleScroll() {
    myRef.current.scrollIntoView({behavior: "smooth"});
  }
  return (
    <div className="page">
      <Main openModal ={openModal} handleScroll={handleScroll}/>
      <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
      <Advantages myRef={myRef}/>  
    </div>
  );
}

export default App;
