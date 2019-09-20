import React from "react";
import { create } from "react-test-renderer";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationBar from '../../../../src/bundle/home/navigation';
import { BrowserRouter } from 'react-router-dom';
Enzyme.configure({ adapter: new Adapter() });

describe("NavigationBar Component", () => {
    test("it matches the snapshot", () => {
        const component = create(<BrowserRouter><NavigationBar /></BrowserRouter>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
