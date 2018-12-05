import axios from 'axios';
import {
  GET_STORIES_BEGIN,
  GET_STORIES_ERROR,
  GET_STORIES_SUCCESS,
  GET_STORIES_UPDATE_BEGIN,
  GET_STORIES_UPDATE_ERROR,
  GET_STORIES_UPDATE_SUCCESS,
  GET_STORY_SUCCESS
} from '../config/constants';

import store from '../store';

const topStoriesUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';

export const getStoriesList = () => async (dispatch) => {
  dispatch({ type: GET_STORIES_BEGIN });
  
  await axios.get(topStoriesUrl).then(async function(response) {
    if(!response.data) {
      dispatch({ type: GET_STORIES_ERROR });

      throw new Error('Unable to fetch stories');
    } else {
      const storyList = response.data;

      const newStories = [];
      for(let i=0; i<20; i++) {
        const storyUrl = `https://hacker-news.firebaseio.com/v0/item/${storyList[i]}.json?print=pretty`

        await axios.get(storyUrl).then(function(response) {   
        // console.log(response.data); 
          if(!response.data) {

            throw new Error('Unable to fetch story');
          } else {
            newStories.push({
              title: response.data.title,
              url: response.data.url
            });
          }

        }, function(response) {
          throw new Error('Unable to fetch story');
        });
      }

      dispatch({ type: GET_STORIES_SUCCESS, list: storyList, stories: newStories });
    }

  }, function(response) {
    dispatch({ type: GET_STORIES_ERROR });
    throw new Error('Unable to fetch stories');
  });
};

export const loadMoreStories = () => async (dispatch) => {
  dispatch({ type: GET_STORIES_UPDATE_BEGIN });

  const storyList = store.getState().stories.list;
  const numStories = store.getState().stories.showing;

  const newStories = [];
  for(let i=numStories; i<numStories+20; i++) {
    console.log('get new story', i);
    const storyUrl = `https://hacker-news.firebaseio.com/v0/item/${storyList[i]}.json?print=pretty`

    await axios.get(storyUrl).then(function(response) {   
      if(!response.data) {

        throw new Error('Unable to fetch story');
      } else {
        newStories.push({
          title: response.data.title,
          url: response.data.url
        });
      }

    }, function(response) {
      throw new Error('Unable to fetch story');
    });
  }

  dispatch({ type: GET_STORIES_UPDATE_SUCCESS, stories: newStories });

};
