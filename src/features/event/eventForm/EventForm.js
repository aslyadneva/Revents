/*global google*/
import React, { Component } from 'react'
import {reduxForm, Field} from 'redux-form'; 
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from 'revalidate';
import { createEvent, updateEvent } from '../eventActions'; 
import cuid from 'cuid';
import user from '../../../assets/images/user.png'; 
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';
import DateInput from '../../../app/common/form/DateInput';
import PlaceInput from '../../../app/common/form/PlaceInput';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const mapStateToProps = (state, {match}) => {
  const eventId = match.params.id;

  let event = {}

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0]
  }

  return {
    initialValues: event
  }
}

const validate = combineValidators({
  title: isRequired({ message: 'The event title is required' }), 
  category: isRequired({ message: 'The category is required' }),
  description: composeValidators(
    isRequired({ message: 'The description is required' }), 
    hasLengthGreaterThan(4)({ message: 'Description must be at least 5 characters' })
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
})

const categoryOptions = [
  {key: 'drinks', text: 'Drinks', value: 'drinks'},
  {key: 'culture', text: 'Culture', value: 'culture'},
  {key: 'film', text: 'Film', value: 'film'},
  {key: 'food', text: 'Food', value: 'food'},
  {key: 'music', text: 'Music', value: 'music'},
  {key: 'travel', text: 'Travel', value: 'travel'},
]

class EventForm extends Component {
  
  state = {
    cityLatLng: {},
    venueLatLng: {}
  }

  onFormSubmit = values => {
    values.venueLatLng = this.state.venueLatLng
    
    //check to see if we are in 'create' mode or 'update' mode by seeing if id exists in state
    if (this.props.initialValues.id) {
      this.props.updateEvent(values)
      this.props.history.push(`/events/${this.props.initialValues.id}`)
    } else {
      const newEvent = {
        ...values, 
        id: cuid(), 
        hostPhotoUrl: user, 
        hostedBy: 'Bob'
      }
     
      this.props.createEvent(newEvent)
      this.props.history.push(`/events/${newEvent.id}`)
    }  
  }

  handleCitySelect = selectedCity => {
    geocodeByAddress(selectedCity)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({cityLatLng: latlng})
      })
      .then(() => {
        this.props.change('city', selectedCity)
      })
  }

  handleVenueSelect = selectedVenue => {
    geocodeByAddress(selectedVenue)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({venueLatLng: latlng})
      })
      .then(() => {
        this.props.change('venue', selectedVenue)
      })
  }

  render() {
    const { history, initialValues, invalid, submitting, pristine } = this.props; 

    return (
      <Grid >
        <Grid.Column width={10}>
          <Segment>
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)} autoComplete="off">
              <Header sub color="teal" content="Event Details"/>
              <Field name='title' component={TextInput} placeholder="Title"/>
              <Field name='category' options={categoryOptions} component={SelectInput} placeholder="Category"/>
              <Field name='description' rows={3} component={TextArea} placeholder="Description"/>

              <Header sub color="teal" content="Event Location"/>
              <Field 
                name='city' 
                component={PlaceInput} 
                options={{types: ['(cities)']}}
                onSelect={this.handleCitySelect}
                placeholder="City"
              />
              <Field 
                name='venue' 
                component={PlaceInput} 
                options={{
                  location: new google.maps.LatLng(this.state.cityLatLng), 
                  radius: 1000,
                  types: ['establishment']
                }}
                onSelect={this.handleVenueSelect}
                placeholder="Venue"
              />
              <Field 
                name='date' 
                component={DateInput} 
                placeholder="Date" 
                dateFormat='dd LLL yyyy h:mm a'
                timeFormat='HH:mm'
                showTimeSelect
              />

              <Button 
                disabled={invalid || submitting || pristine}
                positive 
                type="submit"
              >
                Submit
              </Button>
              <Button 
                type="button" 
                onClick={
                  initialValues.id 
                  ? () => history.push(`/events/${initialValues.id}`) 
                  : () => history.push('/events') 
                }>
                  Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>     
    )
  }
}


export default connect(
  mapStateToProps, 
  { createEvent, updateEvent }
)(reduxForm({form: 'eventForm', validate: validate})(EventForm)); 
