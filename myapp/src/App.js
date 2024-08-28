import { Route, Switch } from 'react-router-dom'
import { Component } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import ConsumerList from './components/ConsumerList'
import CartContext from './context'
import Cart from './components/cart'
const initial_products_list = [
  {
    id: 1,
    name: 'Rice',
    img_url: 'https://media.istockphoto.com/id/153737841/photo/rice.jpg?s=612x612&w=0&k=20&c=lfO7iLT0UsDDzra0uBOsN1rvr2d5OEtrG2uwbts33_c=',
    quantity: 1,
    original_cost: 50,
    cost: 50,
    size: 1
  },
  {
    id: 2,
    name: 'Wheat',
    img_url: 'https://5.imimg.com/data5/ST/QW/MY-38700875/fresh-wheat-crop.jpg',
    quantity: 1,
    original_cost: 60,
    cost: 60,
    size: 1
  },
  {
    id: 3,
    name: 'Millet',
    img_url: 'https://i0.wp.com/www.smartfood.org/wp-content/uploads/2022/04/millets.jpg?fit=1024%2C655&ssl=1',
    quantity: 1,
    original_cost: 80,
    cost: 80,
    size: 1
  },
  {
    id: 4,
    name: 'Millet',
    img_url: 'https://i0.wp.com/www.smartfood.org/wp-content/uploads/2022/04/millets.jpg?fit=1024%2C655&ssl=1',
    quantity: 1,
    original_cost: 80,
    cost: 80,
    size: 1
  }, {
    id: 5,
    name: 'Carrots',
    img_url: 'https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/sites/default/files/20180929_BLP506.jpg',
    quantity: 1,
    original_cost: 40,
    cost: 40,
    size: 1
  },
  {
    id: 6,
    name: 'Tomatoes',
    img_url: 'https://cdn.pixabay.com/photo/2022/09/05/09/50/tomatoes-7433786_640.jpg',
    quantity: 1,
    cost: 30,
    original_cost: 30,
    size: 1
  },
  {
    id: 7,
    name: 'Potatoes',
    img_url: 'https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg',
    quantity: 1,
    cost: 35,
    original_cost: 35,
    size: 1
  }

]
class App extends Component {
  state = {
    cartList: [],
    products_list: initial_products_list
  }
  addCartItem = (product) => {
    const { cartList } = this.state

    const isItemPresent = !!cartList.find(eachCartItem => eachCartItem.id === product.id)
    this.setState(prevState => {
      if (isItemPresent) {

        return {
          cartList: prevState.cartList.map(eachCartItem => {
            if (eachCartItem.id === product.id) {
              const newcost = eachCartItem.size * eachCartItem.quantity * eachCartItem.cost
              console.log(newcost)
              return { ...eachCartItem, quantity: eachCartItem.quantity + product.quantity, size: eachCartItem.size + product.size, cost: newcost }
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
    const { cartList ,products_list} = this.state
    console.log(cartList)

    return (

      <CartContext.Provider value={{ cartList, addCartItem: this.addCartItem, removeItem: this.removeItem,products_list }}>

        (
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/consumerlist' component={ConsumerList} />
          <Route exact path='/cart' component={Cart} />

        </Switch>
        )
      </CartContext.Provider>
    )
  }
}

export default App
