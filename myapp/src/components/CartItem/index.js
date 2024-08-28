import './index.css'
import { MdDelete } from "react-icons/md";

import CartContext from '../../context';

const CartItem = (props) => {
    const { product } = props
    const { name, img_url, quantity, cost, original_cost, id } = product
    console.log('hello')

    return (
        <CartContext.Consumer>
            {value => {
                const { removeItem } = value
                const handleOnClick = () => {
                    removeItem(id)
                }
                return (
                    <li className='checkout'>
                        <div className="check-name">
                            <img src={img_url} className='checkout-img' />
                            <p  >{name}</p>
                        </div>
                        <p className='quantity1'>{original_cost}/-</p>
                        <p className='quantity1'>{quantity}</p>
                        <div className="total">
                            <p>{cost}/-</p>
                            <MdDelete className='delete-icon' onClick={handleOnClick} />
                        </div>
                    </li>
                )
            }}
        </CartContext.Consumer>



    )

}
export default CartItem