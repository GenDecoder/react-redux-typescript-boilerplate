import * as classNames from 'classnames';
import * as React from 'react';

import * as style from './style.css';

export namespace TodoTextInput {
   export interface IOwnProps {
      text?: string;
      placeholder?: string;
      newTodo?: boolean;
      editing?: boolean;
      onSave: (text: string) => void;
   }

   export interface IState {
      text: string;
   }
}

export class TodoTextInput extends React.Component<TodoTextInput.IOwnProps, TodoTextInput.IState> {
   public constructor(props: TodoTextInput.IOwnProps, context?: any) {
      super(props, context);
      this.state = { text: this.props.text || '' };
      this.handleBlur = this.handleBlur.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
   }
   public render() {
      const classes = classNames(
         {
            [style.edit]: this.props.editing,
            [style.new]: this.props.newTodo
         },
         style.normal
      );

      return (
         <input
            className={classes}
            type="text"
            autoFocus={true}
            placeholder={this.props.placeholder}
            value={this.state.text}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit}
         />
      );
   }
   private handleSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
      const text = event.currentTarget.value.trim();
      if (event.which === 13) {
         this.props.onSave(text);
         if (this.props.newTodo) {
            this.setState({ text: '' });
         }
      }
   }

   private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      this.setState({ text: event.target.value });
   }

   private handleBlur(event: React.FocusEvent<HTMLInputElement>) {
      const text = event.target.value.trim();
      if (!this.props.newTodo) {
         this.props.onSave(text);
      }
   }
}
