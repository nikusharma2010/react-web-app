/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { createUser } from '../middleware/actions';
import Notification from './notification.component';
import { Col, Row, SubmitButton, ButtonPrimary, FormDiv, Input } from '../../common/styles';
import { Link } from 'react-router-dom';

/** Make the Component smar and access all features from store from Provider***/
@connect((state) => {
    return {
        user: state.userState.user,
        error: state.userState.error
    };
})
class CreateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmation: false,
            error: 'Test'
        };
    }
	// static getDerivedStateFromProps(nextProps) {
	//     return {
	//         error: nextProps.error
	//     };
	// }
	handleSubmit = (event) => {
	    let user = {};
	    user.id = event.target.employeeId.value;
	    user.firstName = event.target.firstName.value;
	    user.lastName = event.target.lastName.value;
	    user.mobile = event.target.mobile.value;
	    user.email = event.target.email.value;
	    this.props.dispatch(createUser(user));
	    //if (this.state.error == null && this.state.error.trim().length === 0) {
	    this.setState({ confirmation: true });
	    //}

	    event.preventDefault();
	}

	render() {
	    return (

	        <Row>

	            {
	                this.state.confirmation &&
					<Notification message='!!! User Added Successfully !!!' />
	            }
	            {/* {(this.state.error != null && this.state.error.trim().length > 0) &&
					<Notification message={this.state.error} />
	            } */}
	            <Row>
	                <Col>
	                    <Link to='/users'><ButtonPrimary>Back</ButtonPrimary></Link>
	                </Col>
	            </Row>

	            <FormDiv>
	                <form onSubmit={this.handleSubmit}>
	                    <div><h3>Create a New Employee record</h3></div>
	                    <Row>
	                        <Col><label>Employee Number</label></Col>
	                        <Col><Input type="text" id="employeeId" name="employeeId" /></Col>
	                    </Row>
	                    <Row >
	                        <Col><label>First Name</label></Col>
	                        <Col><Input type="text" id="firstName" name="firstName" /></Col>
	                    </Row>
	                    <Row >
	                        <Col><label>Last Name</label></Col>
	                        <Col><Input type="text" id="lastName" name="lastName" /></Col>
	                    </Row>
	                    <Row >
	                        <Col><label>Mobile</label></Col>
	                        <Col><Input type="text" id="mobile" name="mobile" /></Col>
	                    </Row>
	                    <Row >
	                        <Col><label>Email</label></Col>
	                        <Col><Input type="text" id="email" name="email" /></Col>
	                    </Row>
	                    <Row>
	                        <Col>
	                            <SubmitButton style={!this.state.confirmation ? {} : { display: 'none' }}>Add User</SubmitButton>
	                        </Col>
	                    </Row>
	                </form>
	            </FormDiv>
	        </Row>

	    );
	}
}
CreateComponent.propTypes = {
    dispatch: PropTypes.func,
    error: PropTypes.string
};
export default CreateComponent;