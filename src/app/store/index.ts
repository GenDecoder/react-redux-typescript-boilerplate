import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { History } from 'history';

import { logger } from 'app/middleware';
import { IRootState, rootReducer } from 'app/reducers';

export function configureStore(history: History, initialState?: IRootState): Store<IRootState> {
   let middleware = applyMiddleware(logger, routerMiddleware(history));

   if (process.env.NODE_ENV !== 'production') {
      middleware = composeWithDevTools(middleware);
   }

   const store = createStore(rootReducer as any, initialState as any, middleware) as Store<IRootState>;

   if (module.hot) {
      module.hot.accept('app/reducers', () => {
         const nextReducer = require('app/reducers');
         store.replaceReducer(nextReducer);
      });
   }

   return store;
}
