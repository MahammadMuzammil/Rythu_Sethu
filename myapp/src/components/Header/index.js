import './index.css'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Header = (props) => {
    const LogOut = () => {
        const { history } = props
        history.replace('/login')

    }
    const userType = localStorage.getItem('user_type')
    return (
        <div className="header">
            <img src='Image 8.jpg' />
            <ul className='nav-items'>
                <Link to='/' className='link-item'>
                    <li>Home</li>
                </Link>

                
                {userType === 'FARMER' ? <Link to='/farmerlist' className='link-item'>
                    <li>Farmer List</li>
                </Link> : <Link to='/consumerlist' className='link-item'>
                    <li>Comsumer List</li>
                </Link>}
                <Link to='/cart' className='link-item'>
                    <li>Cart</li>
                </Link>

            </ul>
            <button onClick={LogOut} className='logout' >LogOut</button>
        </div>
    )



}
export default withRouter(Header)