import React from 'react'
import {makeStyles,withStyles} from '@material-ui/core/styles'
import {Grid,Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    searialContainer:{
        width:'100%',
        display: 'flex',
        marginTop:'20px'
      }
}));


const CoreSerial = (props) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.searialContainer}>
            {props.coreSearialData && props.coreSearialData ?
            <Grid item xs={12}>
            <Typography variant="h6" style={{fontSize:'30px'}}>Individual Core Searial Exploration</Typography>
                <div style={{display:'flex'}}>
                    <Typography variant="h6">Core Searial : </Typography>
                    <Typography variant="h6">{props.coreSearialData.core_serial}</Typography>
                </div>
                <div style={{display:'flex'}}>
                    <Typography variant="h6">Mission Name : </Typography>
                    <Typography variant="h6">{props.coreSearialData.missions[0].name}</Typography>
                </div>
                <div style={{display:'flex'}}>
                    <Typography variant="h6">Mission Details : </Typography>
                    <Typography variant="h6">{props.coreSearialData.details}</Typography>
                </div>
                <div style={{display:'flex'}}>
                    <Typography variant="h6">Launch Date : </Typography>
                    <Typography variant="h6">{props.coreSearialData.original_launch}</Typography>
                </div>
                <div style={{display:'flex'}}>
                    <Typography variant="h6">Status : </Typography>
                    <Typography variant="h6">{props.coreSearialData.status}</Typography>
                </div>
            </Grid>
            :''}
        </Grid>
    )
}

export default CoreSerial