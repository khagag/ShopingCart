import React ,{Component} from 'react';
import {
  Button,Grid,AppBar,Toolbar,IconButton,Badge
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class HeaderNav extends Component{
  render(){
    return(
      <AppBar position="static">
        <Toolbar>
          <Link to="/cart">
          <IconButton aria-label="cart">
            <Badge badgeContent={this.props.count.toString()} color="secondary">
              <ShoppingCartIcon color='white' />
            </Badge>
          </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}
const mapStateToProps = (state)=> ({
  count :state.count
});

export default connect(mapStateToProps)(HeaderNav);
