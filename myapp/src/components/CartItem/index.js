import './index.css'
import { MdDelete } from "react-icons/md";

import CartContext from '../../context';

const CartItem = (props) => {
    const { product } = props
    const { name, img_url, total_quantity, cost, original_cost, id } = product
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
                        <p className='quantity1'>{total_quantity}Kg</p>
                        <div className="total">
                            <p>{total_quantity*original_cost}/-</p>
                            <MdDelete className='delete-icon' onClick={handleOnClick} />
                        </div>
                    </li>
                )
            }}
        </CartContext.Consumer>



    )

}
export default CartItem