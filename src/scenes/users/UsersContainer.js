import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { fetchAllUsersStart } from './actionsUsers';
import ListUsers from '../../components/ListUsers';
import NavBar from '../../components/NavBar';
import LoadingPage from '../../components/LoadingPage';

class UsersContainer extends PureComponent {
  componentDidMount() {
    this.props.dispatchFetchAllUsers();
  }

  render() {
    const { listUsers } = this.props.reducerUsers;
    if(isEmpty(listUsers)) return <LoadingPage />;
    return (
      <div>
        <NavBar />
        <ListUsers data={listUsers}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reducerUsers: state.reducerUsers
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchAllUsers: () => {
    dispatch(fetchAllUsersStart())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);