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
    date: '2020-03-28T14:00:00+00:00', 
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
    isOpen: false
  }

  handleFormToggle = () => {
    this.setState(({isOpen}) => ({ isOpen: !isOpen}))
  }

  handleCreateEvent = newEvent => {
    newEvent.id = cuid(); 
    newEvent.hostPhotoUrl = user; 
    this.setState(({events}) => ({ events: [...events, newEvent], isOpen: false }))
  }

  render() {
    const {events, isOpen} = this.state;

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events}/>
        </Grid.Column>
        <Grid.Column width={6}>
          <Button positive content="Create Event" onClick={this.handleFormToggle}/>
          {isOpen && <EventForm cancelForm={this.handleFormToggle} submitForm={this.handleCreateEvent}/>}          
        </Grid.Column>
      </Grid>
    )
  }
}

export default EventDashboard;
