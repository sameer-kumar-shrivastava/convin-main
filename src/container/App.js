import React, { Component } from 'react';
import './App.css';
import { requestUsers, requestSingleUser } from '../redux/actions';
import { connect } from 'react-redux';
import UserCard from '../component/user-card/user-card.component';
import Button from '../component/button/button.component';
import Placeholder from '../component/placeholder-card/placeholder.component';


const mapStateToProps = state => {
  return {
    isPending: state.requestUsers.isPending,
    users: state.requestUsers.users,
    error: state.requestUsers.error,

    isSingleUserPending: state.requestSingleUser.isSingleUserPending,
    singleUser: state.requestSingleUser.singleUser,
    singleUserError: state.requestSingleUser.singleUserError,
    isClickedOnce: state.requestSingleUser.isClickedOnce
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onRequestUsers: () => dispatch(requestUsers()),
    onRequestSingleUser: () => dispatch(requestSingleUser())
  }
}


class App extends Component {

  componentDidMount() {
    this.props.onRequestUsers();
  }

  render() {

    const { users, isPending, isSingleUserPending, singleUser, isClickedOnce } = this.props;


    return isPending ?
      <div className='mainloader-container'><div class="loader"></div><h1>Loading...</h1></div>:
      (
        <div className='App'>
          <div>
            {(!isClickedOnce) ? <Placeholder /> : isSingleUserPending ? <div className='preloader-container'><div class="loader"></div><h1>Loading User Details...</h1></div> :
              <UserCard singleUser={singleUser} />}
            <div className='flex'>
              {users.length &&
                users.map((user, i) => {
                  return (<Button key={i} i={i} id={user.id} />);
                })}
            </div>
          </div>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
