import React,{useEffect} from 'react'
import {makeStyles,withStyles} from '@material-ui/core/styles'
import {useDispatch, useSelector} from 'react-redux'
import {capsulesData} from '../Capsules/Capsules.action'
import {capsulesSearialData} from '../Capsules/Capsules.action'
import {Grid,Typography} from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useHistory} from 'react-router-dom'
import CapsuleSerial from '../Capsules/Capsule.serial';

const useStyles = makeStyles((theme) => ({
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      padding: theme.spacing(3),
      backgroundColor: '#eaeff8',
      marginTop:'60px'
    },
    table: {
        minWidth: 650,
    },
    tableContainer:{
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    link: {
        textDecoration: 'underline lightcoral',
        '&:hover': {
          cursor: 'pointer',
          color: 'lightcoral',
        },
      },
  }))
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#1f2935',
      color: theme.palette.common.white,
      fontWeight:'600',
      fontSize: '15px',
      boxShadow: '0 8px 6px -6px black'
    },
    body: {
      fontSize: '14px'
    },
  }))(TableCell);

const Capsules = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(capsulesData())
      }, [dispatch])
      
      const spaceXCapsule = useSelector((state) => state.capsule.data)
      const spaceXCapsuleSearial = useSelector((state) => state.capsule.capsuleSearialData.data)

      const gotoCapsuleSerialView = (val) => {
        history.push('/capsuledetails/' + val)
        dispatch(capsulesSearialData(val))
      }
    return (
        <main className={classes.content}>
        <Grid container className={classes.tableContainer}>
            <Grid item xs={12}>
              <Typography variant="h4" style={{paddingBottom:'12px'}} >SpaceX Capsule Data Exploration</Typography>
            <TableContainer component={Paper} style={{height:'534px'}}>
            <Table className={classes.table} stickyHeader aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Capsule Serial</StyledTableCell>
                        <StyledTableCell align="left">Capsule Type</StyledTableCell>
                        <StyledTableCell align="left">Surface Landings</StyledTableCell>
                        <StyledTableCell align="left">Mission Details</StyledTableCell>
                        <StyledTableCell align="left">Launch Date</StyledTableCell>
                        <StyledTableCell align="left">Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {spaceXCapsule && spaceXCapsule.map((capsuleItem,index) => (
                    <TableRow key={index}>
                    <TableCell component="th" scope="row">
                    <Typography
                              variant='body1'
                              onClick={() => gotoCapsuleSerialView(capsuleItem.capsule_serial)}
                              className={classes.link}
                            >
                              {capsuleItem.capsule_serial}
                            </Typography>
                    </TableCell>
                    <TableCell align="left">{capsuleItem.type}</TableCell>
                    <TableCell align="left">{capsuleItem.landings}</TableCell>
                    <TableCell align="left">{capsuleItem.details && capsuleItem.details ? capsuleItem.details : 'NULL'}</TableCell>
                    <TableCell align="left">{capsuleItem.original_launch && capsuleItem.original_launch ? capsuleItem.original_launch : 'NULL'}</TableCell>
                    <TableCell align="left">{capsuleItem.status }</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Grid>
        </Grid>
            <CapsuleSerial capsuleSearialData={spaceXCapsuleSearial}/>       
        </main>
    )
}

export default Capsules

