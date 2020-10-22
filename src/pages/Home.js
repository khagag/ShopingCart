import React ,{Component} from 'react';
import HeaderNav from '../components/HeaderNav';
import CartItem from '../components/CartItem';
import {Grid} from '@material-ui/core';
const axios = require('axios');


class Home extends Component{
  constructor(props) {
      super(props);
      this.state = {listItems: ''};
    }
  componentDidMount() {
      axios.get(`http://localhost/api/goods`)
      .then(res => {
        let l = res.data.map((item) =>
            <Grid item xs={3}>
              <CartItem/>
            </Grid>
          );
          this.setState({listItems:l});
        console.log(
          this.listItems
        );
      })
    }

  render(){
  console.log(status);
  // const numbers = [1, 2, 3, 4, 5];
    return(
      <div>
        <HeaderNav/>
        <br/>
        <Grid container justify="center" spacing={2} style={{
            margin: 0,
            width: '100%',
          }}>
          {this.state.listItems}
        </Grid>
      </div>
    )
  }
}

export default Home;
