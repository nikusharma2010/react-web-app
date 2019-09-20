import React from 'react';
import expect from 'expect';
import { create } from "react-test-renderer";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import SearchComponent from '../../../../../src/bundle/demo/components/search.component';
import { Link } from 'react-router-dom';

/** Check the Application Module exists**/
Enzyme.configure({ adapter: new Adapter() });

describe("Search Component", () => {
    test("it matches the snapshot", () => {
        const component = create(<BrowserRouter><SearchComponent /></BrowserRouter>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});

describe("Test Link ", () => {
    const event = { target: { name: "employeeId", value: "1" } };
    it('Check Value', () => {
        const wrapper = mount(<BrowserRouter><SearchComponent state={{ employeeId: '' }} /></BrowserRouter>);
        wrapper.find('input').simulate('change', event);
        expect(wrapper.find(Link).props().to).toEqual("/view/1");
    });

});
