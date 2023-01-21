import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import PizzaList from '../PizzaList/PizzaList.jsx'

function App() {

  const [pizzaList, setPizzaList] = useState([]);

  useEffect ( () => {
    fetchPizza();
  }, []);



  const fetchPizza = () => {
    axios({
      method: 'GET', 
      url: '/api/pizza'
    })
    .then((response => {
      console.log(response);
      setPizzaList(response.data);
    }))
    .catch(function (error) {
      console.log('error with FetchPizza', error);
    });
  }

  

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <PizzaList pizzaListProp={pizzaList} />  
    </div>
  );
}

export default App;
