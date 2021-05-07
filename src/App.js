import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import Header from './components/Header';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import ProductFeatures from './features/Product';
import TodoFeature from './features/Todo';


function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />

      {/* <AlbumFeature></AlbumFeature> */}
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />
        <Route path="/" component={CounterFeature} exact/>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/album" component={AlbumFeature} />
        <Route path="/products" component={ProductFeatures} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
