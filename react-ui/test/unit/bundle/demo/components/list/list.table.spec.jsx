import React from "react";
import { create } from "react-test-renderer";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import ListTable from "../../../../../../src/bundle/demo/components/list/list.table";
Enzyme.configure({ adapter: new Adapter() });

describe("List Component", () => {
    test("it matches the snapshot", () => {
        const props = {
            usersList: [
                {
                    "id": "7",
                    "firstName": "Niku",
                    "lastName": "Sharma",
                    "email": "7@thesimpsons.com",
                    "mobile": "007"
                }]
        };
        const component = create(<BrowserRouter><ListTable {...props} /></BrowserRouter>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
