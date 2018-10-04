import { routerReducer, RouterState } from 'react-router-redux';
import { combineReducers } from 'redux';

import { IRootState } from './state';
import { todoReducer } from './todos';

export { IRootState, RouterState };

// NOTE: current type definition of Reducer in 'react-router-redux' and 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<IRootState>({
   todos: todoReducer as any,
   router: routerReducer as any
});
