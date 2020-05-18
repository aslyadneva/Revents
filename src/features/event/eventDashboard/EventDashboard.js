import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import EventActivity from '../eventActivity/EventActivity';

import { connect } from 'react-redux';
import { deleteEvent } from '../eventActions'; 

import { firestoreConnect } from 'react-redux-firebase';


const mapStateToProps = state => {
  return {
    events: state.firestore.ordered.events
  }
}

class EventDashboard extends Component {

  handleDeleteEvent = eventId => {
    this.props.deleteEvent(eventId)
  }

  render() {
    const {events} = this.props; 

    return (
      <Grid>

        <Grid.Column width={10}>
          <EventList 
            events={events} 
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>

        <Grid.Column width={6}>
            <EventActivity/>
        </Grid.Column>

      </Grid>
    )
  }
}

export default connect(
  mapStateToProps, 
  {deleteEvent}
)(firestoreConnect([{collection: 'events'}])(EventDashboard))
                      
