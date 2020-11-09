import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


//data
import {ProductContext} from './contexts/ProductContext'
import {CartContext} from './contexts/CartContext'
 

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	return (
		<div className="App">
			<CartContext.Provider value = {{cart}}>
			<ProductContext.Provider value = {{products, addItem}}>
			<Navigation cart={cart} />
			</ProductContext.Provider>
			</CartContext.Provider>

			{/* Routes */}
			<Route exact path="/">
			<CartContext.Provider value = {{cart}}>
			<ProductContext.Provider value = {{products, addItem}}>
				<Products/>
			</ProductContext.Provider>
			</CartContext.Provider>
			</Route>

			<Route path="/cart">
			<CartContext.Provider value = {{cart}}>
			<ProductContext.Provider value = {{products, addItem}}>
				<ShoppingCart cart={cart} />
			</ProductContext.Provider>
			</CartContext.Provider>
			</Route>
		</div>
	);
}

export default App;
