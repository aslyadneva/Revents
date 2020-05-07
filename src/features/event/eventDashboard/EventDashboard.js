import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import EventForm from '../eventForm/EventForm';
import cuid from 'cuid';

import user from '../../../assets/images/user.png'; 

const events = [
  {
    id: '1', 
    title: 'Event 1 title', 
    date: '2020-03-28', 
    category: 'drinks', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus facere reprehenderit esse ad rem nemo laudantium, debitis ducimus voluptatem optio.', 
    city: 'London, UK', 
    venue: 'Venue Name, Street Name, London, UK', 
    hostedBy: 'Tom', 
    hostPhotoUrl: "https://randomuser.me/api/portraits/men/22.jpg", 
    attendees: [
      {
        id: 'b', 
        name: 'Tom', 
        photoUrl: "https://randomuser.me/api/portraits/men/22.jpg"
      }, 
      {
        id: 'a', 
        name: 'Bob', 
        photoUrl: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
    
  }
]

class EventDashboard extends Component {
  state = {
    events: events, 
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
    newEvent.id = cuid(); 
    newEvent.hostPhotoUrl = user; 
    this.setState(({events}) => ({ events: [...events, newEvent], isOpen: false }))
  }

  handleUpdateEvent = updatedEvent => {
    // use map to clone the existing state events array 
    this.setState({events: this.state.events.map(event => {
      if (event.id === updatedEvent.id) {
        // clone a new obj for the updated event
        return { ...updatedEvent}
      } else {
        return event 
      }
    }), isOpen: false, selectedEvent: null})
  }

  handleDeleteEvent = eventId => {
    this.setState({events: this.state.events.filter(event => event.id !== eventId)})
  }

  handleSelectEvent = event => {
    this.setState({ selectedEvent: event, isOpen: true})
  }

  render() {
    const {events, isOpen, selectedEvent} = this.state;

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

export default EventDashboard;
