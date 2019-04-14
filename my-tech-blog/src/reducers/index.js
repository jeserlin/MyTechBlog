import { combineReducers } from 'redux';
import * as types from '../constants/actionTypes';
import update from 'immutability-helper';

const initData = {
  articleList : [],
};

export const general = (state = initData, action) => {
  switch (action.type) {
    case types.GET_ARTICLE_LIST:
      return update(state, {
        articleList: { $set: action.articleList },
      });
    default:
      return state;
  }
};

export default combineReducers({
  general,
});