import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';
import Modal from './components/Modal/Modal';

function App() {

  const [formData, setFormData] = useState([])
  const [modalMsg, setModalMsg] = useState({ isWrong: false, msg: "" })

  const getFormData = fd => {
    setFormData(prevData =>(
      [
        ...prevData, {...fd}
      ]
    ))
    console.log(formData)
  }

  const getFormError = err => {
    setModalMsg(err)
  }

  const resetModalMsg = () => {
    setModalMsg({ isWrong: false, msg: "" })
  }

  return (
    <div className="App">
      <Form onFormSubmit={getFormData} onFormError={getFormError} />
      <List data={formData} />
      {
        modalMsg.isWrong && <Modal message={modalMsg.msg} onCancel={resetModalMsg} />
      }
    </div>
  );
}

export default App;
