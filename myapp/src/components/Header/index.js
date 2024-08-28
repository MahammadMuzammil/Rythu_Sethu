import './index.css'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Header = (props) => {
    const LogOut = () => {
        const { history } = props
        history.replace('/login')
        
    }
    return (
        <div className="header">
            <img src='Image 8.jpg' />
            <ul className='nav-items'>
                <Link to='/consumerlist' className='link-item'>
                    <li>Home</li>
                </Link>
                <li>About Us</li>
                <li>Features</li>
                <li>Blogs</li>
                <li>Contact</li>
                <Link to='/cart' className='link-item'>
                    <li>Cart</li>
                </Link>
            </ul>
            <button onClick={LogOut} className='logout' >LogOut</button>
        </div>
    )



}
export default withRouter(Header)