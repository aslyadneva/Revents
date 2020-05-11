import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createEvent, updateEvent } from '../eventActions'; 
import cuid from 'cuid';
import user from '../../../assets/images/user.png'; 

const mapStateToProps = (state, {match}) => {
  const eventId = match.params.id;

  let event = {
    title: '', 
    date: '', 
    city: '', 
    venue: '', 
    hostedBy: ''
  }

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0]
  }

  return {
    event
  }
}

class EventForm extends Component {
  state = {
    // this is the default state for creating an event
    ...this.props.event

    // this is the state if we are UPDATING an event 
    // this data is passed down from PROPS and replaces the default state in 
    // componentDidMount()
      // id: 'some long id'
      // title: 'Selected event title', 
      // date: 'some date', 
      // city: 'Some city', 
      // venue: 'Some venue', 
      // hostedBy: 'Some host', 
      // hostPhotoUrl: 'some URL' 
  }

  componentDidMount () {
    if (this.props.selectedEvent) {
      console.log(this.props.selectedEvent)
      this.setState({ ...this.props.selectedEvent })
    }
  }

  // we want the component to update itself when a DIFFERENT selected event
  // is passed down via props WHILE the form is mounted  
  componentDidUpdate (prevProps, prevState) {
    
    if (prevProps.selectedEvent !== this.props.selectedEvent) {
          this.setState({...this.props.selectedEvent})
    } 
  }
  
  handleSubmit = (event) => {
    event.preventDefault(); 

    //check to see if we are in 'create' mode or 'update' mode by seeing if id exists in state
    if (this.state.id) {
      this.props.updateEvent(this.state)
      this.props.history.push(`/events/${this.state.id}`)
    } else {
      const newEvent = {
        ...this.state, 
        id: cuid(), 
        hostPhotoUrl: user
      }
     
      this.props.createEvent(newEvent)
      this.props.history.push(`/events`)
    }  
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value})
  }

  render() {
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

          <Button type="button" onClick={this.props.history.goBack}>Cancel</Button>

        </Form>
      </Segment>
    )
  }
}


export default connect(mapStateToProps, { createEvent, updateEvent })(EventForm); 
