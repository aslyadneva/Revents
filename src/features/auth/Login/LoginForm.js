import React from 'react'
import { Form, Segment, Button } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import TextInput from '../../../app/common/form/TextInput'
import {loginUser} from '../authActions'
import { connect } from 'react-redux'

const LoginForm = ({loginUser, handleSubmit}) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(loginUser)} autoComplete='off'>
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
        <Button fluid size="large" color='teal'>
          Login
        </Button>
      </Segment>
    </Form>
  )
}

export default connect(null, {loginUser})(reduxForm({form: 'loginForm'})(LoginForm))
