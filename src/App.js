import React, { Component } from 'react';
import BingMapsView from './views/BingMapsView'
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import "./App.css"

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BingMapsView />
      </ThemeProvider>
    );
  }
}


export default App;
