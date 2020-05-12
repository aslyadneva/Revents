import React from 'react'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedChat from './EventDetailedChat'
import EventDetailedSidebar from './EventDetailedSidebar'
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux'

const EventDetailedPage = ({event, history}) => {
  if (!event) {
    history.replace('/events')  
    return (null)  
  } else {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventDetailedHeader event={event}/>
          <EventDetailedInfo event={event}/>
          <EventDetailedChat/>
        </Grid.Column>
        <Grid.Column width={6}>
          <EventDetailedSidebar attendees={event.attendees ? event.attendees : []}/>
        </Grid.Column>
      </Grid>
     )
  }      
}

const mapStateToProps = (state, {match}) => {
  return {
    event: state.events.filter(event => event.id === match.params.id)[0]
  }
}

export default connect(mapStateToProps)(EventDetailedPage); 
