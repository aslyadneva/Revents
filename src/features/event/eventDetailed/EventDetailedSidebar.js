import React, {Fragment} from 'react'
import { Segment, Item, Label, List } from 'semantic-ui-react'

import user from '../../../assets/images/user.png'

const EventDetailedSidebar = ({attendees}) => {
  const isHost = false; 
 
  return (
    <Fragment>
      <Segment
        textAlign="center"
        attached="top"
        inverted
        secondary
        color="teal"
        style={{border: 'none'}}
      >
        {attendees.length > 0 ? `${attendees.length} ${attendees.length === 1 ? 'Person' : 'People'} Going` : "No one has RSVP'd yet"} 
      </Segment>

      <Segment attached>
        <List relaxed divided>

          {attendees && attendees.map(attendee => (
            <Item key={attendee.id} style={{position: 'relative'}}>
                {isHost && <Label style={{position: 'absolute'}} color="orange" ribbon="right">Host</Label>}

                <Item.Image size="tiny" src={attendee.photoUrl}/>
                <Item.Content verticalAlign="middle">
                  <Item.Header as="h3">{attendee.name}</Item.Header>
                </Item.Content>
            </Item>
          ))}

        </List>

      </Segment>
    </Fragment>
  )
}

export default EventDetailedSidebar
