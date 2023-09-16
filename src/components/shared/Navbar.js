import React, { useContext } from 'react'; 
import { CartContext } from '../../context/CartContextProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const { state } = useContext(CartContext);

    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
            </div>
            <div>
                <Link to="/cart"><h3>Cart</h3></Link>
                <span>{state.itemsCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;