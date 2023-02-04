import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import PizzaList from '../PizzaList/PizzaList.jsx'
import { useDispatch } from 'react-redux'

import Cart from '../Cart/Cart.jsx';


// Start of App
function App() {

  

  // console.log(addPizza);


  // const [pizzaList, setPizzaList] = useState([]);

  useEffect(() => {
    fetchPizza();
  }, []);

  const dispatch = useDispatch();



  const fetchPizza = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    })
      .then((response => {
        console.log(response);
        dispatch({ type: 'REDUCER_NAME', payload: response.data })
      }))
      .catch(function (error) {
        console.log('error with FetchPizza', error);
      });
  }


  // add header to cart.. create a componenet mayvbe?

  return (
    <div className='App'>


      <header className='App-header'>
        <h1
          className='App-title'>Prime Pizza
           
          {/* onclick attached to cart component
          or
          conditional rendering maybe with ternary operator
          */}
        </h1>
        <Cart />
      </header>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <PizzaList pizzaList={fetchPizza} />
    </div>
  );
}

export default App;
// End of App