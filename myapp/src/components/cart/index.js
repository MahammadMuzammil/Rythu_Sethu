import CartContext from "../../context"
import CartItem from '../CartItem'
import Header from "../Header"
import './index.css'
const Cart = () => {

    return (
        <CartContext.Consumer>

            {value => {
                const { cartList } = value
                console.log(cartList)
                return (
                    <div className="cart-background">

                        <Header />
                        <h1>Checkout</h1>
                        <div className="container2">

                            <div className="container1">

                                <ul className="cart-items-container">
                                    <li className="checkout"> <p className="name">Name</p> <p className="price">Price</p> <p className="quantity1">Quantity</p> <p className="total">Total</p>  </li>
                                    {cartList.map(eachCart => <CartItem product={eachCart} key={eachCart.id} />)}

                                </ul>
                                <img src="Container 31.jpg" />
                            </div>
                            <img src="Container 28.jpg"/>
                        </div>

                        <img src="Container 34.jpg" />

                    </div>
                )
            }}

        </CartContext.Consumer>
    )

}
export default Cart