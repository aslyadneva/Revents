import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'
import RegisterForm from '../auth/Register/RegisterForm'
import { connect } from 'react-redux'
import {closeModal} from './modalActions'

class RegisterModal extends Component {
  render() {
    return (
      <Modal size="mini" open={true} onClose={this.props.closeModal}>
        <Modal.Header>
          Sign up to Re-vents!
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <RegisterForm/>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default connect(null, {closeModal})(RegisterModal) ; 
