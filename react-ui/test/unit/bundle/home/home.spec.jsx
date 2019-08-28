import React from "react";
import { create } from "react-test-renderer";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CustomerHome from '../../../../src/bundle/home/home';
import store from '../../../../src/store/index';
import { Provider } from 'react-redux';
Enzyme.configure({ adapter: new Adapter() });

describe("Home Component", () => {
    test("it matches the snapshot", () => {
        const component = create(<Provider  store={store}><CustomerHome/></Provider>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
