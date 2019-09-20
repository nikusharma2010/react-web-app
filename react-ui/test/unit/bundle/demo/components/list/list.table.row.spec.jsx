import React from "react";
import { create } from "react-test-renderer";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import ListTableRow from "../../../../../../src/bundle/demo/components/list/list.table.row";
Enzyme.configure({ adapter: new Adapter() });

describe("List Row Component", () => {
    test("it matches the snapshot", () => {
        const props = {
            user: {
                "id": "7",
                "firstName": "Niku",
                "lastName": "Sharma",
                "email": "7@thesimpsons.com",
                "mobile": "007"
            }
        };
        const component = create(<BrowserRouter><ListTableRow {...props} /></BrowserRouter>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
