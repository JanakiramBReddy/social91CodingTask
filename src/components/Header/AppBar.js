import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { logout } from '../../containers/LoginCard/LoginCard.action';
import { useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: '#1f2935',
      zIndex: theme.zIndex.drawer + 1,
    }
  })
)

const MyAppBar = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const handlelogout = () => {
    history.push("/");    
    dispatch(logout());
  }

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <div>
          <Typography variant='h6' noWrap>
            SpaceX <span style={{ color: '#eb1b33' }}>Data</span>
          </Typography>
        </div>
        <div className={classes.grow} />
        <div>
          <IconButton
            edge="end"
            aria-label="Help"
            aria-haspopup="true"
            color="inherit"
            onClick={handlelogout}
          >
            <PowerSettingsNewIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default MyAppBar
