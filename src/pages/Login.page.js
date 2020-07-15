import React from 'react'
import styled from '@emotion/styled'
// import AppHeader from '../components/AppHeader/AppHeader'
import LoginCard from '../containers/LoginCard/LoginCard'

const LoginWrapper = styled('div')({
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: '100%',
  width: '100%',
  flex: '1 1 0%',
  padding: '2rem 1rem',
  backgroundColor: '#fde8ea',
  height:'100%'
})

const LoginPage = () => {
  return (
    <>
      {/* <AppHeader> */}
        {/* <div>
          Project <span style={{color: '#eb1b33'}}>Red</span>
        </div> */}
      {/* </AppHeader> */}
      <LoginWrapper>
        <LoginCard />
      </LoginWrapper>
    </>
  )
}

export default LoginPage
