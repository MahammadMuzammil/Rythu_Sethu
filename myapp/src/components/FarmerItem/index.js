import { Component } from "react";
import './index.css'
import { FaCartPlus } from "react-icons/fa";
import CartContext from "../../context";
class FarmerItem extends Component {

    constructor(props) {
        super(props)
        this.state = { updatedPrice: this.props.product.minimum_price }

    }




    increasePrice = () => {
        this.setState(prevState => ({ updatedPrice: prevState.updatedPrice + 1 }))
    }
    decreasePrice = () => {
        const { minimum_price } = this.props.product
        const { updatedPrice } = this.state
        if (minimum_price < updatedPrice) {
            this.setState(prevState => ({ updatedPrice: prevState.updatedPrice - 1 }))
        }
    }
    render() {
        const { product } = this.props
        const { updatedPrice } = this.state
        const { img_url, original_cost, name, minimum_price } = product
        return (

            <CartContext.Consumer>
                {value => {
                    const {setFinalPrice} = value
                            const setPrice=()=>{
                                setFinalPrice({...product,updatedPrice})
                            }
                    return (

                        <li className="product-container">
                            <img src={img_url} className="product-img" />
                            <p className="product-name">{name}</p>
                            <div className="minimumprice">
                                <p>Minimum Price</p>
                                <p className="price">{minimum_price}/-</p>
                            </div>
                            <div className="setprice">
                                <p>Selling Price</p>
                                <div className="increment-decrement-price">
                                    <button onClick={this.increasePrice}>+</button>
                                    <span className='updatedprice'>{updatedPrice}</span>
                                    <button onClick={this.decreasePrice}>--</button>
                                </div>
                            </div>
                            <button className='cart-btn' onClick={setPrice} >
                                <FaCartPlus className='cart-icon' />
                                <p>Set Price</p>
                            </button>
                        </li>
                    )
                }}
            </CartContext.Consumer>

        )
    }

}
export default FarmerItem