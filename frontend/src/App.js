import React from 'react';
import  { BrowserRouter , Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import data from './data';
import Products from './component/Products';

function App() {
  return (
  <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">Sheikh Ecommerce</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>

      </header>
      <main>
  <Route path="/product/:id" component={ProductScreen}></Route>
  <Route path='/' component={HomeScreen} exact></Route>
        <div className="row center">
          {
            data.products.map((product) => (

              <Products key={product._id} product={product}> </Products>
            ))}

        </div>
      </main>
      <footer className="row center">

        All right reserved
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
