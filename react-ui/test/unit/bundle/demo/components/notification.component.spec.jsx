import React from 'react';
import expect from 'expect';
import { create } from "react-test-renderer";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import Notification from '../../../../../src/bundle/demo/components/notification.component';

/** Check the Application Module exists**/
Enzyme.configure({ adapter: new Adapter() });

describe("Notification Component", () => {
    test("it matches the snapshot", () => {
        const component = create(<Notification message={'Message Check'} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});

describe('Notification Component', () => {
    let component;
    beforeEach(() => {
        component = mount(< Notification message='Message Check' />);

    });
    it("Check for Notification Message ", function () {
        expect(component.props().message).toEqual('Message Check');
    });
});
