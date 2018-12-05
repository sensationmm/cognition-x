import {
  GET_STORIES_SUCCESS,
  GET_STORIES_UPDATE_SUCCESS
} from '../config/constants';

const initialState = {
  list: [],
  stories: [],
  showing: 20
};

export const stories = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORIES_SUCCESS:
      return {
        ...state,
        list: action.list,
        stories: action.stories
      };

    case GET_STORIES_UPDATE_SUCCESS:
      const storiesList = state.stories;
      const newStories = action.stories;

      const stories = storiesList.concat(newStories);

      return {
        ...state,
        stories,
        showing: state.showing + 20
      };

    default:
      return state;
  }
};
