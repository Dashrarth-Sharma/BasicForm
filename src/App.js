import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';

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
    </div>
  );
}

export default App;
