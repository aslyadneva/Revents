import React, { Component } from 'react'
import EventListAttendee from './EventListAttendee'; 
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

class EventListItem extends Component {
  render() {
    const {event, deleteEvent} = this.props; 
    console.log(event.attendees); 
    let result = Object.values(event.attendees)
    console.log(result); 
    
    return (
      <Segment.Group>

        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoUrl}/>
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  Hosted by <span href="#">{event.hostedBy}</span>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>

        <Segment>
          <span>
            <Icon name="clock"/> 
            {format(event.date.toDate(), 'EEEE do LLL')} at {format(event.date.toDate(), 'h:mm a')}

            <Icon name="marker"/> 
            {event.venue}
          </span>
        </Segment>

        <Segment secondary>
          <List horizontal>
            {event.attendees && Object.values(event.attendees).map((attendee, idx) => <EventListAttendee key={idx} attendee={attendee}/>)}
          </List>
        </Segment>

        <Segment clearing>
          <span>{event.description}</span>
          <Button 
            as="a" 
            color="red" 
            floated="right" 
            content="Delete" 
            onClick={() => deleteEvent(event.id)}
          />
          <Button 
            as={Link} 
            to={`/events/${event.id}`}
            color="teal" 
            floated="right" 
            content="View" 
          />       
        </Segment>

      </Segment.Group>
    )
  }
}

export default EventListItem; 
