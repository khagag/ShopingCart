import React ,{Component} from 'react';
import HeaderNav from '../components/HeaderNav';
import CartItem from '../components/CartItem';
import {Grid} from '@material-ui/core';


class Home extends Component{
  render(){
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
      <Grid item xs={3}>
        <CartItem/>
      </Grid>
    );
    return(
      <div>
        <HeaderNav/>
        <br/>
        <Grid container justify="center" spacing={2} style={{
    margin: 0,
    width: '100%',
  }}>
          {listItems}
        </Grid>
      </div>
    )
  }
}

export default Home;
