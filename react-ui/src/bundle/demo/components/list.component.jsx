import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../middleware/actions';
import ListTable from './list/list.table';
import { PropTypes } from 'prop-types';
import { CardBody } from '../../common/styles';
import Notification from './notification.component';
import Spinner from './spinner.component';
@connect((state) => {
    return {
        users: state.userState.users,
        isLoading: state.userState.isLoading,
        error: state.userState.error
    };
})

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            isLoading: false,
            error: ''
        };
    }
    componentDidMount() {
        this.props.dispatch(getUsers());
    }
    /** Call each time stor disptach called **/
    static getDerivedStateFromProps(nextProps) {
        return {
            userList: nextProps.users,
            isLoading: nextProps.isLoading,
            error: nextProps.error
        };
    }
    render() {

        if (this.state.isLoading === true) {
            return <Spinner />;
        } else if (this.state.error != null && this.state.error.trim().length > 0) {
            return <Notification message={this.state.error} />;
        }

        return (
            <CardBody>
                <ListTable usersList={this.state.userList} />
            </CardBody>
        );
    }
}
ListComponent.propTypes = {
    users: PropTypes.array,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
    dispatch: PropTypes.func,
};
export default ListComponent;