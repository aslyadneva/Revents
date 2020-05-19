import React, { Component, Fragment } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import logo from '../../../assets/images/logo.png'; 
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../menus/SignedOutMenu';
import SignedInMenu from '../menus/SignedInMenu';
import {openModal} from '../../modals/modalActions'; 
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth, 
    profile: state.firebase.profile
  }
}

class Navbar extends Component {
 
  handleSignIn = () => {
    this.props.openModal('LoginModal')
  }

  handleRegister = () => {
    this.props.openModal('RegisterModal')
  }

  handleSignOut = () => {
    this.props.firebase.logout()
    this.props.history.replace('/')
  }

  render() {
    const {auth, profile} = this.props
    const authenticated = auth.isLoaded && !auth.isEmpty

    return (
        <Menu inverted fixed="top">
          <Container> 

            <Menu.Item as={NavLink} exact to="/" header>
              <img src={logo} alt="logo"/>
              Re-vents
            </Menu.Item>
  
            <Menu.Item as={NavLink} exact to="/events" name="Events"/>

            {auth.authenticated && (
               <Fragment>
                <Menu.Item as={NavLink} to="/people" name="People"/>
                <Menu.Item as={Link} to="/createEvent">
                    <Button floated="right" positive inverted content="Create Event"/>
                </Menu.Item>
              </Fragment>
              ) 
            }

            { authenticated
              ? <SignedInMenu profile={profile} signOut={this.handleSignOut}/> 
              : <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister}/>
            }
                    
          </Container>
        </Menu>
    )
  }
}

export default withRouter(withFirebase(connect(mapStateToProps, { openModal })(Navbar))); 
