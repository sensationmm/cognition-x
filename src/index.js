import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './containers/App';

import { checkBreakPoint } from './actions/ui';
import { getStoriesList, loadMoreStories } from './actions/stories';

//Detect resize
window.addEventListener('resize', () => store.dispatch(checkBreakPoint()) );

//Lazy loading
// window.addEventListener('scroll', () => {
//   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//     store.dispatch(loadMoreStories()) ;
//   }
// });

store.dispatch(getStoriesList());

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <div>
      <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
