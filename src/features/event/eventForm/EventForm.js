import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {
  state = {
    title: '', 
    date: '', 
    city: '', 
    venue: '', 
    hostedBy: ''
  }

  handleSubmit = (event) => {
    event.preventDefault(); 
    this.props.submitForm(this.state)
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value})
  }

  render() {
    const {cancelForm} = this.props; 
    const {title, date, city, venue, hostedBy} = this.state; 
    return (
      <Segment>
        <Form onSubmit={this.handleSubmit} autoComplete="off">

          <Form.Field>
            <label>Event Title</label>
            <input 
              name='title'
              placeholder="Event Title" 
              value={title}
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field>
            <label>Event Date</label>
            <input 
              name='date'
              type="date" 
              placeholder="Event Date" 
              value={date} 
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field>
            <label>City</label>
            <input name='city' placeholder="City event is taking place" value={city} onChange={this.handleChange}/>
          </Form.Field>

          <Form.Field>
            <label>Venue</label>
            <input name='venue' placeholder="Enter the venue of the event" value={venue} onChange={this.handleChange}/>
          </Form.Field>

          <Form.Field>
            <label>Hosted By</label>
            <input 
              name='hostedBy' 
              placeholder="Enter host name" 
              value={hostedBy} 
              onChange={this.handleChange}
            />
          </Form.Field>

          <Button positive type="submit">
            Submit
          </Button>

          <Button type="button" onClick={cancelForm}>Cancel</Button>

        </Form>
      </Segment>
    )
  }

}
export default EventForm; 
