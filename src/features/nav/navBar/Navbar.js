import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import logo from '../../../assets/images/logo.png'; 
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../menus/SignedOutMenu';
import SignedInMenu from '../menus/SignedInMenu';
import {openModal} from '../../modals/modalActions'; 
import { connect } from 'react-redux';
import {logoutUser} from '../../auth/authActions'; 

const mapStateToProps = state => {
  return {
    auth: state.auth
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
    this.props.logoutUser()
    this.props.history.replace('/')
  }

  render() {
    const {auth} = this.props; 
    return (
        <Menu inverted fixed="top">
          <Container> 

            <Menu.Item as={NavLink} exact to="/" header>
              <img src={logo} alt="logo"/>
              Re-vents
            </Menu.Item>
  
            <Menu.Item as={NavLink} exact to="/events" name="Events"/>
            <Menu.Item as={NavLink} to="/people" name="People"/>

            <Menu.Item as={Link} to="/createEvent">
              <Button floated="right" positive inverted content="Create Event"/>
            </Menu.Item>

            { auth.authenticated 
              ? <SignedInMenu signOut={this.handleSignOut} currentUser={auth.currentUser}/> 
              : <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister}/>
            }
                    
          </Container>
        </Menu>
    )
  }
}

export default withRouter(connect(mapStateToProps, { openModal, logoutUser })(Navbar)); 
