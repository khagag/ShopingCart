import React ,{Component} from 'react';
import HeaderNav from '../components/HeaderNav';
import CartItem from '../components/CartItem';
import {Grid,Paper} from '@material-ui/core';
import {connect} from 'react-redux';
const axios = require('axios');


class Cart extends Component{
  constructor(props) {
      super(props);
      this.state = {listItems: ''};
    }

  render(){
  console.log(status);
  // const numbers = [1, 2, 3, 4, 5];
    let listItems = Object.keys(this.props.items).map((item) =>
        <Grid item xs={3}>
          <CartItem name={this.props.items[item].name} id={this.props.items[item].id} price={this.props.items[item].price}/>
        </Grid>
      );
    return(
      <div>
        <HeaderNav/>
        <br/>
        <Grid container justify="left" xs={8} spacing={2} style={{
            margin: 0,
            width: '100%',
          }}>
          {listItems}
        </Grid>
        <Grid container justify='right'>
          <Paper elevation={3} />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state)=> ({
  count :state.count,
  items :state.items
});
export default connect(mapStateToProps)(Cart);
