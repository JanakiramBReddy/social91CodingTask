import React,{useEffect} from 'react'
import {makeStyles,withStyles} from '@material-ui/core/styles'
import {useDispatch, useSelector} from 'react-redux'
import {coresData} from '../Cores/Cores.action'
import {coresSearialData} from '../Cores/Cores.action'
import {Grid,Typography} from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useHistory} from 'react-router-dom'
import CoreSerial from '../Cores/Core.serial';

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

const Cores = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(coresData())
      }, [dispatch])
      
      const spaceXCore = useSelector((state) => state.core.data)
      const spaceXCoreSearial = useSelector((state) => state.core.coreSearialData.data)

      const gotoCoreSerialView = (val) => {
        history.push('/coredetails/' + val)
        dispatch(coresSearialData(val))
      }
    return (
        <main className={classes.content}>
        <Grid container className={classes.tableContainer}>
            <Grid item xs={12}>
              <Typography variant="h4" style={{paddingBottom:'12px'}} >SpaceX Core Data Exploration</Typography>
            <TableContainer component={Paper} style={{height:'534px'}}>
            <Table className={classes.table} stickyHeader aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Core Serial</StyledTableCell>
                        <StyledTableCell align="left">Mission Name</StyledTableCell>
                        <StyledTableCell align="left">RTLS Landings</StyledTableCell>
                        <StyledTableCell align="left">Mission Details</StyledTableCell>
                        <StyledTableCell align="left">Launch Date</StyledTableCell>
                        <StyledTableCell align="left">Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {spaceXCore && spaceXCore.map((coreItem,index) => (
                    <TableRow key={index}>
                    <TableCell component="th" scope="row">
                    <Typography
                              variant='body1'
                              onClick={() => gotoCoreSerialView(coreItem.core_serial)}
                              className={classes.link}
                            >
                              {coreItem.core_serial}
                            </Typography>
                    </TableCell>
                    <TableCell align="left">{coreItem.missions[0].name}</TableCell>
                    <TableCell align="left">{coreItem.rtls_landings}</TableCell>
                    <TableCell align="left">{coreItem.details && coreItem.details ? coreItem.details : 'NULL'}</TableCell>
                    <TableCell align="left">{coreItem.original_launch && coreItem.original_launch ? coreItem.original_launch : 'NULL'}</TableCell>
                    <TableCell align="left">{coreItem.status }</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Grid>
        </Grid>
            <CoreSerial coreSearialData={spaceXCoreSearial}/>       
        </main>
    )
}

export default Cores

