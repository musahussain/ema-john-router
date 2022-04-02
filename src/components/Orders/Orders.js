import React from 'react';
import useProducts from '../../Hooks/useProducts';
import useCart from '../../Hooks/useCart';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h1>order: {products.length}</h1>
            <h1>cart: {cart.length}</h1>
        </div>
    );
};

export default Orders;