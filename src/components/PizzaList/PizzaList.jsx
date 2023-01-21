import './PizzaList.css'

function PizzaList({ pizzaListProp }) {

    
    const addPizza = (pizzaToAdd) => {
        console.log(pizzaToAdd);
    }

    return (
        <>
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
                    {pizzaListProp.map(pizza => (
                        // move into component 
                        <tr key={pizza.id}>
                            <td>{pizza.name}</td>
                            <td>{pizza.description}</td>
                            <td>{pizza.price}</td>
                            <td><button onClick={() => addPizza(pizza)}>Add</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default PizzaList;