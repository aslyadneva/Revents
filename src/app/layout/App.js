import React, {Fragment} from 'react';
import HomePage from '../../features/home/HomePage'; 
import EventDashboard from '../../features/event/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/event/eventDetailed/EventDetailedPage'; 
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage'; 
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/eventForm/EventForm'; 
import Navbar from '../../features/nav/navBar/Navbar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';


function App() {
  return (
    <Fragment>

      <Route exact path="/" component={HomePage}/>

      <Route path="/(.+)">
        <Navbar/>

        <Container className="main">
          <Route exact path="/events">
            <EventDashboard/>
          </Route>  
          <Route exact path="/events/:id" component={EventDetailedPage}/>
          <Route exact path="/people">
            <PeopleDashboard/>
          </Route>   
          <Route exact path="/profile/:id">
            <UserDetailedPage/>
          </Route>   
          <Route path="/settings">
            <SettingsDashboard/>
          </Route> 
          <Route exact path="/createEvent">
            <EventForm/>
          </Route> 
        </Container>
      </Route>

      

   </Fragment>
  );
}

export default App;
