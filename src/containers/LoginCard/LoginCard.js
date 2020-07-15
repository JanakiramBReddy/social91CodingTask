import React, {useState, FormEvent} from 'react'
import styled from '@emotion/styled'
import {useDispatch} from 'react-redux'
import {login} from './LoginCard.action'

const Card = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  boxShadow:
    'rgba(0, 0, 0, 0.2) 0px 11px 15px -7px,rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px',
  borderRadius: '5px',
  backgroundColor: 'white',
  alignItems: 'center',
  paddingTop: '24px',
  paddingBottom: '24px',
  fontFamily: 'inherit',
  width: '365px',
})

const CardTitle = styled('div')({
  color: '#eb1b33',
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: '1.5',
  margin: '0px',
  padding: '20px 24px 0px',
})

const CardSubTitle = styled('div')({
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: 1.5,
  paddingTop: '16px',
  paddingBottom: '24px',
})

const FormContainer = styled('div')({
  margin: '16px 0px'
})

const FormGroup = styled('div')({
  margin: '0px 0px 1.24rem',
})

const FormInputLabel = styled('div')({
  color: '#eb1b33',
  fontSize: '12px',
  fontWeight: 600,
})

const FormInputText = styled('input')({
      WebkitAppearance: 'none',
      boxShadow: 'none',
      color: '',
      display: 'block',
      fontSize: '14px',
      lineHeight: '1.375rem',
      width: '100%',
      borderWidth: '0px 0px 1px',
      borderBottom: '1px solid rgb(201, 194, 213)',
      borderRadius: '0px',
      margin: '0px',
      outline: '0px',
      padding: '0.3125rem 1rem 0.3125rem 0px',
    })

const Button = styled('button')({
    WebkitAppearance: 'none',
    WebkitBoxAlign: 'center',
    WebkitBoxPack: 'center',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: '0.9375rem',
    lineHeight: '1.5rem',
    alignItems: 'center',
    boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
    display: 'flex',
    flexShrink: 0,
    justifyContent: 'center',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    color: 'white',
    fontWeight: 600,
    margin: '0px',
    padding: '0.4375rem 1.5em',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderImage: 'initial',
    borderRadius: '10em',
    transition: 'box-shadow 100ms ease-in 0s',
    outline: '0px',
    backgroundColor: '#1f2935',
})

const LoginForm = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '240px',
  width: '100%',
})

const LoginCard = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFormSubmit = () => {
    const loginCred = {email, password}
    dispatch(login(loginCred))
  }

  const handleOnChangeEmail = (e) => {
    const target = e.target
    setEmail(target.value)
  }

  const handleOnChangePassword = (e) => {
    const target = e.target
    setPassword(target.value)
  }

  return (
    <Card>
      <CardTitle>Sign In</CardTitle>
      <CardSubTitle>
        <span>Wanna join to access spaceX ? </span>
      </CardSubTitle>
      <LoginForm>
        <FormContainer>
          <FormGroup>
            <FormInputLabel title='Email' />
            <FormInputText
              onChange={handleOnChangeEmail}
              type='text'
              placeholder='you@example.com'
            />
          </FormGroup>
          <FormGroup>
            <FormInputLabel title='Password' />
            <FormInputText
              onChange={handleOnChangePassword}
              type='password'
              placeholder='********'
            />
          </FormGroup>
        </FormContainer>
          <Button onClick={handleFormSubmit}>Login</Button>
      </LoginForm>
    </Card>
  )
}

export default LoginCard
