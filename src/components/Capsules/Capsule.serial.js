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


const CapsuleSerial = (props) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.searialContainer}>
            {props.capsuleSearialData && props.capsuleSearialData ?
            <Grid item xs={12}>
            <Typography variant="h6" style={{fontSize:'30px'}}>Individual Capsule Searial Exploration</Typography>
                <div style={{display:'flex'}}>
                    <Typography variant="h6">Capsule Searial : </Typography>
                    <Typography variant="h6">{props.capsuleSearialData.capsule_serial}</Typography>
                </div>
                <div style={{display:'flex'}}>
                    <Typography variant="h6">Capsule Type : </Typography>
                    <Typography variant="h6">{props.capsuleSearialData.type}</Typography>
                </div>
                <div style={{display:'flex'}}>
                    <Typography variant="h6">Mission Details : </Typography>
                    <Typography variant="h6">{props.capsuleSearialData.details && props.capsuleSearialData.details ? props.capsuleSearialData.details : 'NULL'}</Typography>
                </div>
                <div style={{display:'flex'}}>
                    <Typography variant="h6">Launch Date : </Typography>
                    <Typography variant="h6">{props.capsuleSearialData.original_launch  && props.capsuleSearialData.original_launch ? props.capsuleSearialData.original_launch : 'NULL'}</Typography>
                </div>
                <div style={{display:'flex'}}>
                    <Typography variant="h6">Status : </Typography>
                    <Typography variant="h6">{props.capsuleSearialData.status}</Typography>
                </div>
            </Grid>
            :''}
        </Grid>
    )
}

export default CapsuleSerial