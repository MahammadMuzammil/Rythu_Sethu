import { Component } from 'react'
import Header from '../Header'
import ProductItem from '../ProductItem'
import './index.css'
import CartContext from '../../context'


class ConsumerList extends Component {

    render() {
        return (
            <CartContext.Consumer>

                {value => {
                    const { products_list } = value
                    return (
                        <div className="consumerlist-container">
                            <Header />
                            <img src='Container 21.jpg' />
                            <ul className='products-container'>
                                {products_list.map(eachProduct => <ProductItem key={eachProduct.id} product={eachProduct} />)}
                                <img src="Container 32.jpg" />
                            </ul>
                        </div>
                    )
                }}

            </CartContext.Consumer>
        )


    }


}

export default ConsumerList
