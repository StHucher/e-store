import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { getCategories } from './fetcher';

import ProductDetail from './components/productDetail';
import Basket from './components/basket';
import Checkout from './components/checkout';
import Category from './components/Category';

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from './components/layout';
import Home from './components/home';


function App() {

	const [categories, setCategories] = useState({ errorMessage: '', data: [] });
	const [products, setProducts] = useState({ errorMessage: '', data: [] });

	React.useEffect(() => {
		const fetchData = async () => {
			const responseObject = await getCategories();
			setCategories(responseObject);
		}
		fetchData();
	}, [])


	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout categories={categories} />} >
						<Route index element={<Home />} />
						<Route path="basket" element={<Basket />} />
						<Route path="checkout" element={<Checkout />} />
						<Route
							path="products/:productId"
							element={<ProductDetail />}
						/>
						<Route
							path="categories/:categoryId"
							element={<Category />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

