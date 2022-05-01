import React from 'react';
import * as actions from './store/actions';
import { useSelector, } from 'react-redux';
import { MuiThemeProvider, createTheme, } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import NowWhat from './components/NowWhat';
import MetricList from "./components/MetricList";


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


 
const App = () => {
  const isSwitch = useSelector(state => state.switch);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper>
        <Header />
        {!isSwitch && <NowWhat />}
        {isSwitch &&  <MetricList />} 
      </Wrapper>
    </MuiThemeProvider>
    );

}


export default App;
