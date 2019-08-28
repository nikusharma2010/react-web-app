import React from "react";
import { create } from "react-test-renderer";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../../../../src/store/index';
import App from '../../../../src/App';
import { Provider } from 'react-redux';
Enzyme.configure({ adapter: new Adapter() });

describe("App Component", () => {
    test("it matches the snapshot", () => {
        const component = create(<Provider  store={store}><App/></Provider>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
