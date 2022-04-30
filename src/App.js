import React from 'react';
import { ToastContainer, } from 'react-toastify';
import  createStore from './store';
import { Provider } from "react-redux";
import { MuiThemeProvider, createTheme, } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import NowWhat from './components/NowWhat';
import Weather from './components/Weather';

const store = createStore();

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      default: 'rgb(226,231,238)',
    },
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
    <Wrapper>
    
      <Header />
      <Weather/>
      {/* <NowWhat /> */}
      {/* <ToastContainer /> */}
    </Wrapper>
    </Provider>
  </MuiThemeProvider>
);

export default App;
