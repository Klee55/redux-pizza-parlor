import './PizzaList.css'

function PizzaList({ pizzaListProp }) {
    return (
        <>
            <h1>PizzaList component here!</h1>
            {pizzaListProp.map(pizza => (
                <table className="list-container" key={pizza.id}>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>{pizza.name}</td>
                            <td>{pizza.description}</td>
                            <td>{pizza.price}</td>
                            <td><button>Add</button></td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </>
    )
}
export default PizzaList;