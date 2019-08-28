import React from 'react';
import { Row, Col } from '../../common/styles';

class Spinner extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Row>
                <Col textAlign="center">
                    <b>Loading...</b>
                </Col>
            </Row>
        );
    }
}

export default Spinner;
