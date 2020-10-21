import React from 'react';
import ReactDOM from 'react-dom';
import {
  Button,Grid,AppBar,Toolbar,IconButton,Badge
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function App() {
  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <IconButton aria-label="cart">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon color='white' />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="baseline"
    >
    <Button variant="contained" xs color="primary">
      Hello World
    </Button>
    <Button variant="contained" xs color="primary">
      Hello World
    </Button>
    <Button variant="contained" xs color="primary">
          Hello World
        </Button>
    </Grid>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
