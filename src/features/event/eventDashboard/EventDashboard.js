import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import EventForm from '../eventForm/EventForm';
import cuid from 'cuid';

import user from '../../../assets/images/user.png'; 
import { connect } from 'react-redux';
import { createEvent, updateEvent, deleteEvent } from '../eventActions'; 

class EventDashboard extends Component {
  state = {
    isOpen: false, 
    selectedEvent: null
  }

  handleFormCancel = () => {
    this.setState({selectedEvent: null, isOpen: false})
  }

  handleFormOpen = () => {
    if (this.state.selectedEvent) {
      this.setState({selectedEvent: null, isOpen: true})
    } else {
      this.setState({isOpen: true})
    }
  }

  handleCreateEvent = newEvent => {
    newEvent.id = cuid()
    newEvent.hostPhotoUrl = user
    this.props.createEvent(newEvent)
    this.setState({ isOpen: false })
  }

  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent)
    this.setState({isOpen: false, selectedEvent: null})
  }

  handleDeleteEvent = eventId => {
    this.props.deleteEvent(eventId)
  }

  handleSelectEvent = event => {
    this.setState({ selectedEvent: event, isOpen: true})
  }

  render() {
    const {isOpen, selectedEvent} = this.state;
    const {events} = this.props; 

    return (
      <Grid>

        <Grid.Column width={10}>
          <EventList 
            events={events} 
            selectEvent={this.handleSelectEvent}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>

        <Grid.Column width={6}>
          {!selectedEvent && isOpen === false && <Button 
                                positive 
                                content="Create Event" 
                                onClick={() => this.setState({isOpen: true})}
                              />
          }
          
          {isOpen && <EventForm 
                        cancelForm={this.handleFormCancel} 
                        createEvent={this.handleCreateEvent} 
                        updateEvent={this.handleUpdateEvent}
                        selectedEvent={selectedEvent}
                      />
          }          
        </Grid.Column>

      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps, {createEvent, updateEvent, deleteEvent})(EventDashboard);
