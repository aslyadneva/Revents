import React from 'react'
import { Form, Segment, Button, Label, Divider } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import TextInput from '../../../app/common/form/TextInput'
import { loginUser, socialLogin } from '../authActions'
import { connect } from 'react-redux'
import SocialLogin from '../SocialLogin/SocialLogin'

const LoginForm = ({loginUser, socialLogin, handleSubmit, error}) => {
  return (
    <Form size="large" onSubmit={handleSubmit(loginUser)} autoComplete='off'>
      <Segment>
        <Field 
          name='email' 
          component={TextInput} 
          type='text' 
          placeholder='Email Address'
        />
        <Field 
          name='password' 
          component={TextInput} 
          type='password' 
          placeholder='Password'
        />

        {error && <Label basic color="red">{error}</Label>}

        <Button fluid size="large" color='teal'>
          Login
        </Button>

        <Divider horizontal>Or</Divider>

        <SocialLogin socialLogin={socialLogin}/>

      </Segment>
    </Form>
  )
}

export default connect(null, {loginUser, socialLogin})(reduxForm({form: 'loginForm'})(LoginForm))
