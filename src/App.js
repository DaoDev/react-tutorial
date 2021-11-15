import './App.css';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Song';
import { Redirect, Route, Switch } from 'react-router';
import NotFound from './features/NotFound';
import Header from './components/Header';
import CounterFeature from './features/Counter';
import ProductFeature from './features/Product';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/home/:homeId" to="/homes/:homeId" exact />

        <Route path="/" component={CounterFeature} exact />
        <Route path="/todo" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
