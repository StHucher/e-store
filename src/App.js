import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Category from './components/Category';
import { fetcher } from './fetcher';


function App() {

  const [categories, setCategories] = useState({errorMessage:'', data: []});
  const [products, setProducts] = useState([]);

 React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await fetcher("/categories");
      setCategories(responseObject);
    }
    fetchData();
  }, [])

  const handleCategoryClick = (id) => {
    fetch("http://localhost:3001/products?catId=" +id)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setProducts(data)
    })
  }

  const renderCategories = () => {
    return categories.data.map(c => 
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick={() => handleCategoryClick(c.id)} />
      );
  }

  const renderProducts = () => {
    return products.map(p => <div>{p.title}</div> )
  }

  return (
    <>
   
    <header>My Store</header>

      <section>
        <nav>
          { categories.errorMessage && <div>Error: {categories.errorMessage}</div>}
          { categories.data &&  renderCategories() }
        </nav>

        <article>
          <h1>Products</h1>
          { products && renderProducts() }
        </article>
        
      </section>

      <footer>
        footer
      </footer>
    </>
  );
}

export default App;

