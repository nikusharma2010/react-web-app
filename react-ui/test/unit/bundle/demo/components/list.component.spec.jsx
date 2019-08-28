import React from 'react';
import expect from 'expect';
import { create } from "react-test-renderer";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import ListComponent from '../../../../../src/bundle/demo/components/list.component';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
    userState: {
        users: [],
        isLoading: false,
        error: ''
    }
});
/** Check the Application Module exists**/
Enzyme.configure({ adapter: new Adapter() });

describe("List Component", () => {
    test("it matches the snapshot", () => {
        const component = create(<Provider store={store}><ListComponent />)</Provider>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
describe("Check Loading", () => {
    const storeLoading = mockStore({
        userState: {
            users: [],
            isLoading: true,
            error: ''
        }
    });
    it('Check Value', () => {
        const wrapper = mount(<ListComponent store={storeLoading} match={{ params: { id: '1' } }} />);
        expect(wrapper.find('Spinner').length).toBe(1);
    });
});
describe("Check Loading", () => {
    const storeLoading = mockStore({
        userState: {
            users: [],
            isLoading: false,
            error: 'Test'
        }
    });
    it('Check Value', () => {
        const wrapper = mount(<ListComponent store={storeLoading} match={{ params: { id: '1' } }} />);
        expect(wrapper.find('Notification').length).toBe(1);
    });
});