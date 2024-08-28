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
                const totalAmount = cartList.reduce((acc,curr)=> (acc+ curr.total_quantity*curr.original_cost),0 )
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
                            <div className="payment">
                            <img src="Container 28.jpg"/>
                            <div className="checkout-card">
                                <h1>Total Items  :<span className="total-items">{cartList.length}</span>  </h1>
                                <h1>Amount :<span className="total-amount">{totalAmount}/-</span></h1>
                            </div>
                            </div>

                        </div>

                        <img src="Container 34.jpg" />

                    </div>
                )
            }}

        </CartContext.Consumer>
    )

}
export default Cart