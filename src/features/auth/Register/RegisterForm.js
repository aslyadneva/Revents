import React from 'react'
import { connect } from 'react-redux'
import { Form, Segment, Button, Label, Divider } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import { combineValidators, isRequired } from 'revalidate'
import TextInput from '../../../app/common/form/TextInput'
import { registerUser, socialLogin } from '../authActions'; 
import SocialLogin from '../SocialLogin/SocialLogin'

const validate = combineValidators({
  displayName: isRequired('displayName'), 
  email: isRequired('email'), 
  password: isRequired('password')
})

const RegisterForm = ({handleSubmit, registerUser, socialLogin, error, invalid, submitting}) => {
  return (
    <Form size="large" autoComplete="off" onSubmit={handleSubmit(registerUser)}>
      <Segment>
        <Field 
          name='displayName' 
          component={TextInput} 
          type='text' 
          placeholder='Known as'
        />
        <Field
          name='email' 
          component={TextInput} 
          type='email' 
          placeholder='Email'
        />
        <Field
          name='password' 
          component={TextInput} 
          type='password' 
          placeholder='Password'
        />
        {error && <Label color="red">{error}</Label>}
        <Button 
          disabled={invalid || submitting}
          fluid 
          size='large' 
          color='teal'
        >
          Register
        </Button>

        <Divider horizontal>Or</Divider>

        <SocialLogin socialLogin={socialLogin}/>

      </Segment>
    </Form>
  )
}

export default connect(null, {registerUser, socialLogin})(reduxForm({form: 'registerForm', validate})(RegisterForm))
