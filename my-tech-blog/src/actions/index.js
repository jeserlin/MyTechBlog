import * as types from '../constants/actionTypes';

import ArticleList from '../static/data/article';

export const getArticleList = () => dispatch => {
  dispatch({
    type: types.GET_ARTICLE_LIST,
    articleList: ArticleList
  });
}