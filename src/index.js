import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import {
  Button,Grid
} from '@material-ui/core';

function App() {
  return (
    <>
    <Home/>
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
