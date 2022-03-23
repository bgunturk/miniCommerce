import React from 'react';
import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SingleProductPage from './components/singleProductPage';
import Products from './components/products';
import CreateProduct from './components/createProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <section>
          <Routes>
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<SingleProductPage />} />
            <Route path="create-product" element={<CreateProduct />} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
