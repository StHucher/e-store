import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Category from './components/Category';
import { getCategories, getProducts } from './fetcher';
import CategoryProduct from './components/categoryProduct';
import { Link } from 'react-router-dom';


function App() {

  const [categories, setCategories] = useState({errorMessage:'', data: []});
  const [products, setProducts] = useState({errorMessage:'', data: []});

 React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();
  }, [])

  const handleCategoryClick = (id) => {
    const fetchData = async () => {
      const responseObject = await getProducts(id);
      setProducts(responseObject);
    }
    fetchData();
  }

  const renderCategories = () => {
    return categories.data.map(c => 
      <li key = {c.id}><Link to={`/categories/${c.id}`}>{c.title}</Link></li>
    );
      
  }

  

  return (
    <>
   
    <header>My Store</header>

      <section>
        <nav>
          { categories.errorMessage && <div>Error: {categories.errorMessage}</div>}

          <ul>{ categories.data &&  renderCategories() }</ul>
        </nav>

        <main>
        
        </main>
        
      </section>

      <footer>
        footer
      </footer>
    </>
  );
}

export default App;

