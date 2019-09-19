import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, ButtonPrimary, FormDiv, Input } from '../../common/styles';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeId: ''
        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event) {
        this.setState({ employeeId: event.target.value });
    }
    render() {

        return (
            <Row>
                <h3>Search By Employee Number</h3>
                <FormDiv>

                    <Row>
                        <Col><label>Number </label></Col>
                        <Col>
                            <Input type="text" id="employeeId" name="employeeId" value={this.state.employeeId} onChange={this.handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link id="viewEmployee" to={`/view/${this.state.employeeId}`}>
                                <ButtonPrimary>View </ButtonPrimary></Link>
                        </Col>
                    </Row>

                </FormDiv>
            </Row>
        );
    }
}

export default SearchComponent;