import { Component } from "react";
import CartContext from "../../context";
import Header from "../Header";
import FarmerItem from "../FarmerItem";
import './index.css'

class Farmerlist extends Component {

    render() {
        return (

            <CartContext.Consumer>

                {value => {
                    const { products_list } = value
                    return (
                        <div className="farmerlist-background">
                            <Header />
                            <img src='Container 21.jpg' />
                            <ul className="products-container">
                            {products_list.map(eachProduct=><FarmerItem product={eachProduct} key={eachProduct.id}/>)}

                            </ul>
                        </div>
                    )
                }}
            </CartContext.Consumer>
        )
    }

}
export default Farmerlist







