import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, } from '@material-ui/core/styles';
import { switchActions, } from '../store/reducers/Switch';
import Weather from './Weather';
import { useSelector, useDispatch,  } from 'react-redux';


const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
  button : {
    fontSize: '1.25rem',
    backgroundColor: '#ffbb00',
    border: '1px  #ffbb00',
    borderRadius: '2rem',
    padding: '0.5rem 1.5rem',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
    color: '#2c2922',
    margin: '1rem', 
    '&:hover':{
      backgroundColor: '#ffa600',
      borderColor: '#ffa600',
    },
    
  },
  

});

export default () => {
  const classes = useStyles();

  const dispath = useDispatch();
  //const isSwitch = useSelector(state => state.Switch.isSwitch);
  

  const switchHandler = () => {
    dispath(switchActions.weatherPage());
  };

  const name = "Yasha's";
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {name} EOG React Visualization Assessment
          <button className={classes.button} onClick={switchHandler}>switch</button>
        </Typography>
        {/* <Weather /> */}
      </Toolbar>
    </AppBar>
  );
};
