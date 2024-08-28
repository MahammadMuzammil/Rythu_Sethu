import './index.css'
import { FaCartPlus } from "react-icons/fa";
import { Component } from 'react'
import CartContext from '../../context';

class ProductItem extends Component {


    state = {
        quantity: 1,
        size:1
    }
    onChangeSize=(e)=>{
        this.setState({size:e.target.value})
    }
    increaseQuantity = () => {
        this.setState(prevState => ({ quantity: prevState.quantity + 1 }))
    }

    decreaseQuantity = () => {
        const { quantity } = this.state
        if (quantity > 1) {
            this.setState(prevState => ({ quantity: prevState.quantity - 1 }))
        }

    }

    render() {
        const { quantity ,size} = this.state
        console.log(size*quantity)
        const { product } = this.props
        const { original_cost, name, id } = product
        

        return (

            <CartContext.Consumer>

                {value => {
                    const { addCartItem } = value
                    const handleOnClick = () => {
                        const total_quantity =quantity*size
                        addCartItem({ ...product, total_quantity })
                    }

                    return (
                        <li className="product-container">
                            <img src={product.img_url} className="product-img" />
                            <div className="align-name-cost">
                                <p className='product-name'>{name}</p>
                                <p className='product-cost'>{original_cost}/-</p>
                            </div>
                            <div className="size-quantity">

                                <div className="choose-size">
                                    <p>Choose Size</p>
                                    <select className='size-select' onChange={this.onChangeSize} >
                                        <option value="1">1KG</option>
                                        <option value="2">2KG</option>
                                        <option value="5">5KG</option>
                                    </select>
                                </div>
                                <div className="choose-quantity">
                                    <p>Quantity</p>
                                    <div className="increment-decrement-container">
                                        <button onClick={this.increaseQuantity}>+</button>
                                        <span className='quantity'>{quantity}</span>
                                        <button onClick={this.decreaseQuantity}>-</button>
                                    </div>
                                </div>
                            </div>
                            <button className='cart-btn' onClick={handleOnClick}>
                                <FaCartPlus className='cart-icon' />
                                <p>Add to Bag</p>
                            </button>

                        </li>
                    )

                }}
            </CartContext.Consumer>
        )

    }

}
export default ProductItem