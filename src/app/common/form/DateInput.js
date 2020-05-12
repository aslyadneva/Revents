import React from 'react'
import { Form, Label } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ input, width, placeholder, meta: {touched, error}, ...rest }) => {
  console.log(input.value)
  return (
    <Form.Field error={touched && !!error}>
      <DatePicker
        {...rest}
        selected={input.value ? new Date(input.value) : null}
        placeholderText={placeholder}
        onChange={input.onChange}
        onBlur={input.onBlur}
        onChangeRaw={event => event.preventDefault()}
      />
      {touched && error && <Label basic color="red">{error}</Label>}
    </Form.Field>
  )
}

export default DateInput
