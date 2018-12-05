import React from 'react';
import { connect } from 'react-redux';

import Loader from '../components/Loader';
import Stories from '../components/Stories';

import { loadMoreStories } from '../actions/stories';

const Home = (props) => {
  const { isLoading, isLazyLoading, stories, loadMoreStories } = props;
  
  if(isLoading) {
    return <Loader />
  }

  return (
    <div>
      <Stories stories={stories} />

      {isLazyLoading 
        ? <Loader mini />
        : <div className="load-more" onClick={loadMoreStories}>Load more</div>
      }
    </div>
  );
}

const mapStateToProps = state => ({
  isLoading: state.loader.isLoading,
  isLazyLoading: state.loader.isLazyLoading,
  stories: state.stories.stories
});


const actions = { loadMoreStories };

export default connect(mapStateToProps, actions)(Home);
