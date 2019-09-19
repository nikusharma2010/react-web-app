import React from 'react';
import { Row, Col, ButtonPrimary, ButtonSuccess, ButtonInfo } from '../common/styles';
import { Link } from 'react-router-dom';

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <Row bottomBorder="true">
                <Col>
                    <Link to="/add">
                        <ButtonPrimary>Add User</ButtonPrimary>
                    </Link>
                </Col>
                <Col textAlign="center">
                    <Link to="/Search">
                        <ButtonInfo>Search User</ButtonInfo>
                    </Link>
                </Col>
                <Col textAlign="right">
                    <Link to="/list">
                        <ButtonSuccess>Users</ButtonSuccess>
                    </Link>
                </Col>
            </Row>
        );
    }
}
