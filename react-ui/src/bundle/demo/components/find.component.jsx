import React from 'react';
import { connect } from 'react-redux';
import { getUser, removeUser } from '../middleware/actions';
import Notification from './notification.component';
import { PropTypes } from 'prop-types';
import { Col, Row, ButtonPrimary, ButtonDanger, FormDiv } from '../../common/styles';
import Spinner from './spinner.component';
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
	    let deleted = this.state.deleted;

	    if (this.state.isLoading === true) {
	        return <Spinner />;
	    } else if (this.state.error != null && this.state.error.trim().length > 0) {
	        return <Notification message={this.state.error} />;
	    }
	    return (

	        <Row>
	            <Col>
	                <FormDiv>
	                    <Row>
	                        <Col textAlign="left"><label>Employee Number</label></Col>
	                        <Col textAlign="left">
	                            {user.id}
	                        </Col>
	                    </Row>
	                    <Row>
	                        <Col textAlign="left"> <label>Name</label></Col>
	                        <Col textAlign="left">
	                            {user.firstName + ' ' + user.lastName}
	                        </Col>
	                    </Row>

	                    <Row>
	                        <Col textAlign="left"><label >Email</label></Col>
	                        <Col textAlign="left">
	                            {user.email}
	                        </Col>
	                    </Row>
	                    <Row>
	                        <Col textAlign="left"><label >Mobile</label></Col>
	                        <Col textAlign="left">
	                            {user.mobile}
	                        </Col>
	                    </Row>
	                </FormDiv>
	                <Row>
	                    <Col textAlign="left">
	                        <ButtonDanger id="deleteUser" onClick={this.deleteUser} style={!deleted ? {} : { display: 'none' }}>Delete</ButtonDanger>
	                    </Col>
	                    <Col textAlign="right">
	                        <a href='/list'>
	                            <ButtonPrimary>Back</ButtonPrimary>
	                        </a>
	                    </Col>
	                </Row>

	            </Col>
	        </Row >

	    );
	}
}
FindComponent.propTypes = {
    match: PropTypes.object.isRequired,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    dispatch: PropTypes.func,
};

export default FindComponent;
