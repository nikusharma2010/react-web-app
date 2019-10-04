import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Col, Row, NameLabel, ButtonPrimary } from '../../../common/styles';

class ListTableRow extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        const { user } = this.props;
        return (

            <Row bottomBorder="true" id={'user_id_' + user.id}>
                <Col textAlign="center">

                    <NameLabel>
                        {user.firstName.charAt(0).toUpperCase()}{user.lastName.charAt(0).toUpperCase()}
                    </NameLabel>

                </Col>
                <Col col="2">

                    <div><b>{user.firstName + ' ' + user.lastName}</b></div>
                    <div>{user.mobile}</div>
                    <div>{user.email}</div>

                </Col>
                <Col textAlign="right"><Link to={`/view/${this.props.user.id}`}><ButtonPrimary>View</ButtonPrimary> </Link></Col>
            </Row>

        );
    }
}
ListTableRow.propTypes = {
    user: PropTypes.object,
};
export default ListTableRow;