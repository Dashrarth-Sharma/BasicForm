import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';
// import Modal from './components/Modal/Modal';

function App() {

  const [formData, setFormData] = useState([])

  const getFormData = fd => {
    setFormData(prevData =>(
      [
        ...prevData, {...fd}
      ]
    ))
    console.log(formData)
  }

  return (
    <div className="App">
      <Form onFormSubmit={getFormData} />
      <List data={formData} />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
