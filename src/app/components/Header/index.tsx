import * as React from 'react';

import { TodoActions } from 'app/actions/todos';
import { TodoTextInput } from '../TodoTextInput';

export namespace Header {
   export interface IProps {
      addTodo: typeof TodoActions.addTodo;
   }
}

export class Header extends React.Component<Header.IProps> {
   public constructor(props: Header.IProps, context?: any) {
      super(props, context);
   }
   public render() {
      return (
         <header>
            <h1>Todos</h1>
            <TodoTextInput newTodo={true} onSave={this.handleSave} placeholder="What needs to be done?" />
         </header>
      );
   }
   private handleSave = (text: string) => {
      if (text.length) {
         this.props.addTodo({ text });
      }
   };
}
