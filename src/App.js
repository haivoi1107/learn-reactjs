import React, { useEffect } from 'react';
import { Redirect, Link, Route, Switch } from 'react-router-dom';
import categoryApi from './api/categoryApi';
import productApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeatur from './features/Album';
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
      Header
      <p>
        <Link to="/todos">Todo </Link>
      </p>
      <p>
        <Link to="/album">Album </Link>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/album" component={AlbumFeatur} />
        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
