import React, {Fragment} from 'react';
import EventDashboard from '../../features/event/eventDashboard/EventDashboard';
import Navbar from '../../features/nav/navBar/Navbar';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Container className="main">
        <EventDashboard/>
      </Container>
   </Fragment>
  );
}

export default App;
