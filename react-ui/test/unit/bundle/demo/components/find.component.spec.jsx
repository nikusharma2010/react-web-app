import React from "react";
import { create } from "react-test-renderer";
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FindComponent from "../../../../../src/bundle/demo/components/find.component";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
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

describe("Find Component", () => {
    test("it matches the snapshot", () => {
        const component = create(<FindComponent store={store} match={{ params: { id: '1' } }} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
describe("Check Loading", () => {
    const storeLoading = mockStore({
        userState: {
            user: {},
            isLoading: true,
            error: ''
        }
    });
    it('Check Value', () => {
        const wrapper = mount(<FindComponent store={storeLoading} match={{ params: { id: '1' } }} />);
        expect(wrapper.find('Spinner').length).toBe(1);
    });
});
describe("Check Loading", () => {
    const storeLoading = mockStore({
        userState: {
            user: {},
            isLoading: false,
            error: 'Test'
        }
    });
    it('Check Value', () => {
        const wrapper = mount(<FindComponent store={storeLoading} match={{ params: { id: '1' } }} />);
        expect(wrapper.find('Notification').length).toBe(1);
    });
});
describe("Form Submit", () => {
    it('Check Value', () => {
        const wrapper = mount(<FindComponent store={store} match={{ params: { id: '1' } }} />);
        const deleteUser = wrapper.find('button');       
        expect(deleteUser.length).toBe(1);
        deleteUser.simulate('click', {});
        expect(wrapper.exists()).toEqual(true);
    });
});