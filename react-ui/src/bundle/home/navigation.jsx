import React from 'react';
import { Row, Col, ButtonPrimary, ButtonSuccess, ButtonInfo } from '../common/styles';

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <Row bottomBorder="true">
                <Col textAlign="left">
                    <a href="/add">
                        <ButtonPrimary>Add User</ButtonPrimary>
                    </a>
                </Col>
                <Col textAlign="center">
                    <a href="/Search">
                        <ButtonInfo>Search User</ButtonInfo>
                    </a>
                </Col>
                <Col textAlign="right">
                    <a href="/list">
                        <ButtonSuccess>Users</ButtonSuccess>
                    </a>
                </Col>
            </Row>
        );
    }
}
