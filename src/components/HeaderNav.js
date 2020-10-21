import React ,{Component} from 'react';
import {
  Button,Grid,AppBar,Toolbar,IconButton,Badge
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class HeaderNav extends Component{
  render(){
    return(
      <AppBar position="static">
        <Toolbar>
          <IconButton aria-label="cart">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon color='white' />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default HeaderNav;
