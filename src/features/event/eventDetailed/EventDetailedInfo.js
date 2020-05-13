import React, { useState } from 'react'
import EventDetailedMap from './EventDetailedMap'; 
import { Segment, Grid, Icon, Button } from 'semantic-ui-react'

const EventDetailedInfo = ({event}) => {
  const [isMapOpen, toggleMap] = useState(false)

  return (
    <Segment.Group>

      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info"/>
          </Grid.Column>

          <Grid.Column width={15}>
            <p>{event.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="calendar"/>
          </Grid.Column>

          <Grid.Column width={15}>
            <span>{event.date.toString()}</span>
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="marker"/>
          </Grid.Column>

          <Grid.Column width={11}>
            <span>{event.venue}</span>
          </Grid.Column>
 
          <Grid.Column width={4}>
            <Button 
              color="teal" 
              size="tiny" 
              content={`${isMapOpen ? 'Hide' : 'Show'} Map`}
              onClick={()=> toggleMap(!isMapOpen)}
            />
          </Grid.Column>
        </Grid>
      </Segment>
      {isMapOpen && <EventDetailedMap lat={event.venueLatLng.lat} lng={event.venueLatLng.lng}/>}    
    </Segment.Group>
  )
}

export default EventDetailedInfo; 
