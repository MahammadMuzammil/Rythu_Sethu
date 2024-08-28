import { Route, Switch } from 'react-router-dom'
import { Component } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import ConsumerList from './components/ConsumerList'
import CartContext from './context'
import Cart from './components/cart'
import Home from './components/Home'
import Farmerlist from './components/FarmerList'
const initial_products_list = [
  {
    id: 1,
    name: 'Rice',
    img_url: 'https://media.istockphoto.com/id/153737841/photo/rice.jpg?s=612x612&w=0&k=20&c=lfO7iLT0UsDDzra0uBOsN1rvr2d5OEtrG2uwbts33_c=',
    original_cost: 50,
    minimum_price: 50,


  },
  {
    id: 2,
    name: 'Wheat',
    img_url: 'https://5.imimg.com/data5/ST/QW/MY-38700875/fresh-wheat-crop.jpg',
    original_cost: 60,
    minimum_price: 60
  },
  {
    id: 3,
    name: 'Millet',
    img_url: 'https://i0.wp.com/www.smartfood.org/wp-content/uploads/2022/04/millets.jpg?fit=1024%2C655&ssl=1',
    original_cost: 80,
    minimum_price: 80

  },
  {
    id: 4,
    name: 'Millet',
    img_url: 'https://i0.wp.com/www.smartfood.org/wp-content/uploads/2022/04/millets.jpg?fit=1024%2C655&ssl=1',
    original_cost: 80,
    minimum_price: 80

  }, {
    id: 5,
    name: 'Carrots',
    img_url: 'https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/sites/default/files/20180929_BLP506.jpg',
    original_cost: 40,
    minimum_price: 40

  },
  {
    id: 6,
    name: 'Tomatoes',
    img_url: 'https://cdn.pixabay.com/photo/2022/09/05/09/50/tomatoes-7433786_640.jpg',
    original_cost: 30,
    minimum_price: 30
  },
  {
    id: 7,
    name: 'Potatoes',
    img_url: 'https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg',
    original_cost: 35,
    minimum_price: 35

  }

]
class App extends Component {
  state = {
    cartList: [],
    products_list: initial_products_list
  }
  setFinalPrice = (product) => {
    this.setState(prevState => {
      return (
        {
          products_list: prevState.products_list.map(eachProduct => {
            if (eachProduct.id === product.id) {
              return { ...eachProduct, original_cost: product.updatedPrice }
            }
            else {
              return eachProduct
            }
          })
        }
      )
    })


  }

  addCartItem = (product) => {
    const { cartList } = this.state

    const isItemPresent = !!cartList.find(eachCartItem => eachCartItem.id === product.id)
    this.setState(prevState => {
      if (isItemPresent) {

        return {
          cartList: prevState.cartList.map(eachCartItem => {
            if (eachCartItem.id === product.id) {


              return { ...eachCartItem, total_quantity: eachCartItem.total_quantity + product.total_quantity }
            } else {
              return eachCartItem
            }
          })
        }

      }

      else {

        return { cartList: [...prevState.cartList, product] }
      }

    })



  }
  removeItem = (id) => {
    this.setState(prevState => ({ cartList: prevState.cartList.filter(eachCartItem => eachCartItem.id !== id) }))
  }
  render() {
    const { cartList, products_list } = this.state
    console.log(products_list)

    return (

      <CartContext.Provider value={{ cartList, addCartItem: this.addCartItem, removeItem: this.removeItem, products_list, setFinalPrice: this.setFinalPrice }}>


        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/consumerlist' component={ConsumerList} />
          <Route exact path='/farmerlist' component={Farmerlist} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/' component={Home} />

        </Switch>

      </CartContext.Provider>
    )
  }
}

export default App
