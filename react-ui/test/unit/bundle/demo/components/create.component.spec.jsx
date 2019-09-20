
import React from "react";
import { Provider } from 'react-redux';
import { create } from "react-test-renderer";
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreateComponent from "../../../../../src/bundle/demo/components/create.component";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
    userState: {
        user: {},
        isLoading: false,
        error: ''
    }
});
Enzyme.configure({ adapter: new Adapter() });

describe("Create Component", () => {
    store.dispatch = jest.fn();
    test("it matches the snapshot", () => {
        const component = create(<Provider store={store}><BrowserRouter><CreateComponent /></BrowserRouter></Provider>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
describe("Form Submit", () => {
    let confirmation = false;
    let mockForm = {
        target:
        {
            employeeId: {
                value: 'test'

            },
            firstName: {
                value: 'test'

            },
            lastName: {
                value: 'test'

            },
            mobile: {
                value: 'test'

            },
            email: {
                value: 'test'

            }
        }
    };
    store.dispatch = jest.fn();
    it('Check Value', () => {
        const wrapper = mount(<Provider store={store}><BrowserRouter><CreateComponent confirmation={confirmation} /></BrowserRouter></Provider>);
        wrapper.find('button').simulate('submit', mockForm);
        expect(wrapper.exists()).toEqual(true);
    });
});