import React from "react";
import { create } from "react-test-renderer";
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FindComponent from "../../../../../src/bundle/demo/components/find.component";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
    userState: {
        user: {},
        isLoading: false,
        error: '',
        deleted: false
    }
});

Enzyme.configure({ adapter: new Adapter() });


describe("Find Component", () => {
    store.dispatch = jest.fn();
    test("it matches the snapshot", () => {
        const component = create(<BrowserRouter><FindComponent store={store} match={{ params: { id: '1' } }} /></BrowserRouter>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});

describe("Check Loading", () => {
    const storeLoading = mockStore({
        userState: {
            user: {},
            isLoading: true,
            error: '',
            deleted: false
        }
    });
    storeLoading.dispatch = jest.fn();
    it('Check Value', () => {
        const wrapper = mount(<BrowserRouter><FindComponent store={storeLoading} match={{ params: { id: '1' } }} /></BrowserRouter>);
        expect(wrapper.find('Spinner').length).toBe(1);
    });
});
describe("Check Loading", () => {
    const storeLoading = mockStore({
        userState: {
            user: {},
            isLoading: false,
            error: 'Test',
            deleted: false
        }
    });
    storeLoading.dispatch = jest.fn();
    it('Check Value', () => {
        const wrapper = mount(<BrowserRouter><FindComponent store={storeLoading} match={{ params: { id: '1' } }} /></BrowserRouter>);
        expect(wrapper.find('Notification').length).toBe(1);
    });
});
describe("Form Submit", () => {
    const store = mockStore({
        userState: {
            user: {
                id: '2',
                firstName: 'Simon',
                lastName: 'Smith',
                email: 'maggie@thesimpsons.com',
                mobile: '003001234567890'
            },
            isLoading: false,
            deleted: false
        }
    });
    store.dispatch = jest.fn();
    it('Check Value', () => {
        const mockDeleteUser = jest.fn();
        const component = mount(<BrowserRouter><FindComponent store={store} deleteUser={mockDeleteUser} match={{ params: { id: '1' } }} /></BrowserRouter>);
        component.find('#deleteUser').at(0).simulate('click');

        expect(component.debug()).toMatchSnapshot();
    });
});
