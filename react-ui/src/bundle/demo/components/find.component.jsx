import React from 'react';
import { connect } from 'react-redux';
import { getUser, removeUser } from '../middleware/actions';
import Notification from './notification.component';
import { PropTypes } from 'prop-types';
import { Col, Row, ButtonPrimary, ButtonDanger, FormDiv } from '../../common/styles';
import Spinner from './spinner.component';
import { Link } from 'react-router-dom';

/** Make the Component smar and access all features from store from Provider***/
@connect((state) => {
    return {
        user: state.userState.user,
        isLoading: state.userState.isLoading,
        error: state.userState.error
    };
})
class FindComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userObj: {},
            isLoading: false,
            error: '',
            deleted: false
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.dispatch(getUser(id));
    }
    static getDerivedStateFromProps(nextProps) {

        return {
            userObj: nextProps.user,
            isLoading: nextProps.isLoading,
            error: nextProps.error
        };

    }

	deleteUser = (e) => {
	    e.preventDefault();
	    const id = this.props.match.params.id;
	    this.props.dispatch(removeUser(id));
	    this.setState({ deleted: true });
	}

	render() {
	    let user = this.state.userObj;

	    if (this.state.isLoading === true) {
	        return <Spinner />;
	    } else if (this.state.error != null && this.state.error.trim().length > 0) {
	        return <Notification message={this.state.error} />;
	    }
	    else if (this.state.deleted) {
	        return <Notification message={'!!! User Deleted Successfully !!!'} />;
	    }
	    return (
	        <Row>
	            <Row>
	                <Col>
	                    <Link to='/users'><ButtonPrimary>Back</ButtonPrimary></Link>
	                </Col>
	            </Row>
	            <Row>
	                <Col>
	                    <FormDiv>
	                        <Row>
	                            <Col ><label>Employee Number</label></Col>
	                            <Col >
	                                {user.id}
	                            </Col>
	                        </Row>
	                        <Row>
	                            <Col > <label>Name</label></Col>
	                            <Col >
	                                {user.firstName + ' ' + user.lastName}
	                            </Col>
	                        </Row>

	                        <Row>
	                            <Col ><label >Email</label></Col>
	                            <Col >
	                                {user.email}
	                            </Col>
	                        </Row>
	                        <Row>
	                            <Col ><label >Mobile</label></Col>
	                            <Col >
	                                {user.mobile}
	                            </Col>
	                        </Row>
	                    </FormDiv>
	                    <Row>
	                        <Col >
	                            <ButtonDanger id="deleteUser" onClick={this.deleteUser}>Delete</ButtonDanger>
	                        </Col>
	                    </Row>

	                </Col>
	            </Row >
	        </Row >

	    );
	}
}
FindComponent.propTypes = {
    match: PropTypes.object.isRequired,
    user: PropTypes.object,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    dispatch: PropTypes.func,
};

export default FindComponent;
