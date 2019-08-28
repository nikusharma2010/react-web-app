import React from "react";
import { create } from "react-test-renderer";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationBar from '../../../../src/bundle/home/navigation';
Enzyme.configure({ adapter: new Adapter() });

describe("NavigationBar Component", () => {
    test("it matches the snapshot", () => {
        const component = create(<NavigationBar />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
