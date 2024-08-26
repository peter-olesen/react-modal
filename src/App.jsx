import { useState } from 'react'
import { Modal } from './components/Modal/Modal'
import './App.scss'

function App() {

  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  }

  const openModal = () => {
    setOpen(true);
  }


  return (
    <>
      <button onClick={openModal}>
        Open Modal
      </button>
      
      <Modal isOpen={open} onClose={closeModal}>
        <p>Paragraph inside the modal</p>
      </Modal>
    </>
  )
}

export default App
