import { useSelector } from 'react-redux';
import { useState } from 'react';

// function to sum pizzas stored in cart.
function Cart() {


    const addPizza = useSelector(store => store.addPizza);

    console.log(addPizza);

    // take index of array and sum it up 
    const addPrice = addPizza.reduce((number, pizza) => number = number + Number(pizza.price), 0);

    // setter and getter of conditional for ternary operator
    let [Visible, setVisible] = useState(false);

    return (
        // toggle a hello and goodbye ^-^
        <>
            <button onClick={() => setVisible(!Visible)} className='total-price'>Cart</button>
            
            {
                // condition ? true : false // if else
                // condition && (true) // if
                // Visible && (
                //     <div><p>Total Price: ${addPrice}</p></div>
                // ) 
                Visible && (
                    // Modal from W3Schools
                    // https://www.w3schools.com/howto/howto_css_modals.asp
                    <div id="myModal" class="modal">

                        <div class="modal-content">
                            <span onClick={() => setVisible(!Visible)} class="close">&times;</span>
                            <p>Total Price: ${addPrice}</p>
                        </div>

                    </div>
                )
            }

        </>

    )
} // end of Cart();

export default Cart;



                // condition ? true : false
                // condition && (true)