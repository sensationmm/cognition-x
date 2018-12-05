import {
  GET_STORIES_BEGIN,
  GET_STORIES_ERROR,
  GET_STORIES_SUCCESS,
  GET_STORIES_UPDATE_BEGIN,
  GET_STORIES_UPDATE_ERROR,
  GET_STORIES_UPDATE_SUCCESS
} from '../config/constants';

const initialState = {
  isLoading: false,
  isLazyLoading: false
};

export const loader = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORIES_BEGIN:
      return {
        ...initialState,
        isLoading: true,
      };

    case GET_STORIES_UPDATE_BEGIN:
      return {
        ...initialState,
        isLazyLoading: true,
      };

    case GET_STORIES_SUCCESS:
    case GET_STORIES_ERROR:
    case GET_STORIES_UPDATE_ERROR:
    case GET_STORIES_UPDATE_SUCCESS:
      return initialState;

    default:
      return state;
  }
};
