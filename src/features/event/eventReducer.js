import { FETCH_EVENTS, CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventTypes";

const INITIAL_STATE = [
    {
      id: '1', 
      title: 'Event 1 title',  
      date: '2020-03-28T18:00:00', 
      category: 'drinks', 
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus facere reprehenderit esse ad rem nemo laudantium, debitis ducimus voluptatem optio.', 
      city: 'London, UK', 
      venue: 'Venue Name, Street Name, London, UK', 
      venueLatLng: {
        lat: 51.5118074,
        lng: -0.12300089999996544
      },
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

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EVENTS: 
      return [...action.payload];

    case CREATE_EVENT: 
      return [...state, action.payload];

    case UPDATE_EVENT: 
      const getNewEvents = (updatedEvent) => {
        return state.map(event => {
          if (event.id === updatedEvent.id) {
            return { ...updatedEvent}
          } else {
            return event 
          }      
        })
      }
      return getNewEvents(action.payload);

    case DELETE_EVENT: 
      const getFilteredEvents = (eventId) => {
        return state.filter(event => event.id !== eventId)
      }
      return getFilteredEvents(action.payload);

    default: 
      return state; 
  }
}