import React from 'react';
import ListTableRow from './list.table.row';
import { PropTypes } from 'prop-types';

class ListTable extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            this.props.usersList.map((user) =>
                <ListTableRow key={user.id} user={user} />)
        );
    }
}
ListTable.propTypes = {
    usersList: PropTypes.array,
};
export default ListTable;