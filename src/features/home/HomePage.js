import React from 'react'
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react'
import logo from '../../assets/images/logo.png'

const HomePage = ({history}) => {
  return (
    <Segment className="inverted vertical masthead center aligned">
      <Container text>
        <Header as="h1" className="stackable" inverted>
          <Image 
            size="massive"
            src={logo}
            alt="logo"
            style={{marginBottom: 12}}
          />
          <div className="content">Re-vents</div>
        </Header>
        <Header as="h2" inverted> Do whatever you want to do</Header>
        <Button size="huge" inverted className="white" onClick={()=> history.push('./events')}>
          Get Started
          <Icon name="right arrow"/>
        </Button>
      </Container>
    </Segment>
  )
}

export default HomePage
