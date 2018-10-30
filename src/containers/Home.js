import React from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
  return (
    <div>
      Home
    </div>
  );
}

const mapStateToProps = state => ({
  isLoading: state.loader.isLoading
});

export default connect(mapStateToProps)(Home);
