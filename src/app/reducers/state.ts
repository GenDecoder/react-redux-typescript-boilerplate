import { ITodoModel } from 'app/models';
import { RouterState } from 'react-router-redux';

export interface IRootState {
   todos: RootState.TodoState;
   router: RouterState;
}

export namespace RootState {
   export type TodoState = ITodoModel[];
}
