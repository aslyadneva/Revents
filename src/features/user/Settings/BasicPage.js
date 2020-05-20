import React from 'react'
import { Segment, Header, Form, Divider, Button } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import TextInput from '../../../app/common/form/TextInput'
import DateInput from '../../../app/common/form/DateInput'
import PlaceInput from '../../../app/common/form/PlaceInput'
import RadioInput from '../../../app/common/form/RadioInput'
import { addYears } from 'date-fns'

const BasicPage = ({pristine, submitting, handleSubmit, updateProfile }) => {
  return (
   <Segment>
     <Header dividing size="large" content="Basics"/>
     <Form onSubmit={handleSubmit(updateProfile)}>
       <Field 
        width={8}
        name='displayName'
        type='text'
        component={TextInput}
        placeholder="Known as"
       />

       <Form.Group inline>
         <label>Gender: </label>
        <Field 
          name="gender"
          type="radio"
          value='male'
          label="Male"
          component={RadioInput}
        />
        <Field 
          name="gender"
          type="radio"
          value='female'
          label="Female"
          component={RadioInput}
        />
       </Form.Group>

       {/* <Field 
        width={8}
        name='dateOfBirth'
        component={DateInput}
        placeholder="Date of birth"
        dateFormat='dd LLL yyyy'
        showYearDropDown={true}
        showMonthDropDown={true}
        dropdownMode='select'
        maxDate={addYears(new Date(), -18)}
       /> */}
        <Field 
        width={8}
        name='city'
        options={{types: ['(cities)']}}
        component={PlaceInput}
        placeholder="Home town"
       />
       <Divider/>
       <Button disabled={pristine || submitting} size="large" positive content="Update profile"/>
     </Form>
     
   </Segment>
  )
}

export default reduxForm({form: 'userProfile', enableReinitialize: true, destroyOnUnmount: false})(BasicPage)
