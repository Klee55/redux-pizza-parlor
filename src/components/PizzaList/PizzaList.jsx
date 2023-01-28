import './PizzaList.css';
// import axios from 'axios';

import { useSelector } from 'react-redux';

function PizzaList() {
    const pizzaList = useSelector(store => store.pizzaList);

    return (
        <section>
            <h1>PizzaList component here!</h1>
            <table className="list-container">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzaList.map((pizza, index) => (
                        // move into component 
                        <tr key={index}>
                            <td>{pizza.name}</td>
                            <td>{pizza.description}</td>
                            <td>{pizza.price}</td>
                            <td><button onClick={() => dispatch({
                                type: 'ADD_PIZZA',
                                payload: response.data
                            })}>
                                Add
                            </button>
                                <button>Remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default PizzaList;