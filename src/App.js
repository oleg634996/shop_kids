
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Footer from './components/Footer/Footer';

function App() {
  const [showModal, setShowModal] = useState(false);

  const togglModal = () => {
    setShowModal(() => !showModal);
  };
  return (
    <div className="App">
      <Header togglModal={togglModal} />
      {showModal && <Modal togglModal={togglModal} />}
      <Footer/>
      
    </div>
  );
}

export default App;
