import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../../../src/App';
Enzyme.configure({ adapter: new Adapter() });

describe("App Component", () => {
    test("it matches the snapshot", () => {
        const component = shallow(<App />);
        expect(component.find('CustomerHome').length).toEqual(1);

    });
});
