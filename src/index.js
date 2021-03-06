import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import {
  Button,Grid
} from '@material-ui/core';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cart from './pages/Cart';


const initialState = {
  count : 0,
  items : {}
};
function reducer(state=initialState,action){
  console.log(action);
  let tmp = {};
  switch (action.type) {
    case 'Add':
      tmp ={
        count : (state.count + action.count),
      };
      if(action.item.id in state.items){
        state.items[action.id].count += 1;
        tmp.items = state.items;
      }else{
        state.items[action.item.id]=action.item;
        tmp.items = state.items;
      }
      console.log(state);
      return tmp;
      break;
    default:
      return state;
  }
}
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/cart" component={Cart}/>
          <Route path="/" component={Home}/>


        </Switch>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
