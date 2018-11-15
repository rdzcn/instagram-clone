import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-redux-store';

import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

//import data
import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data
const defaultState = {
  posts,  //ES6 - instead of posts: posts
  comments //ES6 - instead of comments: comments
}; 

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store); 

export default store;
