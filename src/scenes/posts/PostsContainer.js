import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { fetchAllPostsStart } from './actionsPosts';
import ListCards from '../../components/ListCards';
import NavBar from '../../components/NavBar';
import LoadingPage from '../../components/LoadingPage';

class PostsContainer extends PureComponent {
  componentDidMount() {
    this.props.dispatchFetchAllPosts();
  }

  render() {
    const { listPosts } = this.props.reducerPosts;
    if (isEmpty(listPosts)) return (<LoadingPage />);
    return (
      <div>
        <NavBar />
        <ListCards data={listPosts}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reducerPosts: state.reducerPosts
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchAllPosts: () => {
    dispatch(fetchAllPostsStart())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);