import React from 'react';
import CustomerHome from './bundle/home/home';
import { Container } from '../src/bundle/common/styles';

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <CustomerHome />
            </Container>
        );
    }
}
