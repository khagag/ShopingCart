import React ,{Component} from 'react';
import HeaderNav from '../components/HeaderNav';
import CartItem from '../components/CartItem';
import CartListItem from '../components/CartListItem';
import {Grid,GridList,GridListTile} from '@material-ui/core';
import {connect} from 'react-redux';
const axios = require('axios');
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class Cart extends Component{
  constructor(props) {
      super(props);
      this.state = {listItems: ''};
    }

  render(){
  console.log(status);
  // const numbers = [1, 2, 3, 4, 5];
    let listItems = Object.keys(this.props.items).map((item) =>
        <GridListTile  cols={2}>
          <CartListItem name={this.props.items[item].name} id={this.props.items[item].id} price={this.props.items[item].price}/>
        </GridListTile >
      );
    return(
      <div>
        <HeaderNav/>
        <br/>
        <Grid container justify="center" spacing={2} style={{
            margin: 0,
            width: '100%',
          }}>
        <Grid item xs={8}>
          <GridList cols={2}>
            {listItems}
          </GridList>
        </Grid>
        <Grid item xs={4}>
          <Card >
            <CardContent>
              <Typography  color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                lent
              </Typography>
              <Typography color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          </Grid>
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
