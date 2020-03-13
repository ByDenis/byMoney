import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { mPlus,mMinus } from './actions'


import { makeStyles } from '@material-ui/core/styles';
import { Button,TextField,Grid } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(2),
        backgroundColor: '#ffffff',
        color: '#ff3300',
        width: 50
    },
    textfield: {
        borderColor: "#ffffff !important",
        color: '#ffffff',
    }
}));
const AppCount = ({ props, dispatch }) => {
    const classes = useStyles();
    return (
        <Grid 
        
        container
        alignItems="center"
        justify="center"
        direction="row"
        >
            <Button 
                className={classes.button}
                onClick={e => {
                    e.preventDefault()
                    dispatch(mPlus(1))
                }}
            >+</Button>
            <TextField 
            className={classes.textfield}
            id="outlined-basic" 
            label="Количество" 
            variant="outlined"
            size="small"
            color="primary"
            value={props.count}
            ></TextField>
            <Button 
                className={classes.button}
                onClick={e => {
                    e.preventDefault()
                    dispatch(mMinus(1))
                }}
            >-</Button>
        </Grid>
      ) 
  }
  const mapStateToProps = function(state) {
    return {
      count:3
    }
  }
  export default connect(mapStateToProps)(AppCount)