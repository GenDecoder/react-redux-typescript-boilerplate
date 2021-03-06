import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';

import { TodoActions } from 'app/actions';
import { Footer, Header, TodoList } from 'app/components';
import { ITodoModel, TodoModel } from 'app/models';
import { IRootState, RootState } from 'app/reducers/state';
import { omit } from 'app/utils';

import * as style from './style.css';

const FILTER_VALUES = (Object.keys(TodoModel.Filter) as (keyof typeof TodoModel.Filter)[]).map(
   key => TodoModel.Filter[key]
);
const FILTER_FUNCTIONS: Record<TodoModel.Filter, (todo: ITodoModel) => boolean> = {
   [TodoModel.Filter.SHOW_ALL]: () => true,
   [TodoModel.Filter.SHOW_ACTIVE]: todo => !todo.completed,
   [TodoModel.Filter.SHOW_COMPLETED]: todo => todo.completed
};
export namespace App {
   export interface IOwnProps extends RouteComponentProps<void> {
      todos: RootState.TodoState;
      actions: TodoActions;
      filter: TodoModel.Filter;
   }
}
class App extends React.Component<App.IOwnProps> {
   public static defaultProps: Partial<App.IOwnProps> = {
      filter: TodoModel.Filter.SHOW_ALL
   };
   public constructor(props: App.IOwnProps, context?: any) {
      super(props, context);
   }
   public render() {
      const { todos, actions, filter } = this.props;
      const activeCount = todos.length - todos.filter(todo => todo.completed).length;
      const filteredTodos = filter ? todos.filter(FILTER_FUNCTIONS[filter]) : todos;
      const completedCount = todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);
      return (
         <div className={style.normal}>
            <Header addTodo={actions.addTodo} />
            <TodoList todos={filteredTodos} actions={actions} />
            <Footer
               filter={filter}
               activeCount={activeCount}
               completedCount={completedCount}
               onClickClearCompleted={this.handleClearCompleted}
               onClickFilter={this.handleFilterChange}
            />
         </div>
      );
   }
   private handleClearCompleted = (): void => {
      const hasCompletedTodo = this.props.todos.some(todo => todo.completed || false);
      if (hasCompletedTodo) {
         this.props.actions.clearCompleted();
      }
   };

   private handleFilterChange = (filter: TodoModel.Filter): void => {
      this.props.history.push(`#${filter}`);
   };
}
const mapStateToProps = (state: IRootState): Pick<App.IOwnProps, 'todos' | 'filter'> => {
   const hash = state.router.location && state.router.location.hash.replace('#', '');
   const filter = FILTER_VALUES.find(value => value === hash) || TodoModel.Filter.SHOW_ALL;
   return { todos: state.todos, filter };
};
const mapDispatchToProps = (dispatch: Dispatch): Pick<App.IOwnProps, 'actions'> => ({
   actions: bindActionCreators(omit(TodoActions, 'Type'), dispatch)
});
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App);
