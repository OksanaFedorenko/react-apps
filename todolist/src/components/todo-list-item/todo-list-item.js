import React, { Component } from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component {

   state = {
     done: false,
     important: false
   };
   
  /*constructor() {
    super();
    this.state = {
      done: false
    };
  }*/
  
  /*Это stage-3 proposal - функция-стрелка создается на самом объекте, а не на прототипе и this сохраняет свое лексическое значение. Можно применять и другой, более консервативный, способ, закомментированный ниже.*/

 onLabelClick = () => {
   this.setState({
     done: true
   });
 };

 onMarkImportant = () => {
    this.setState({
      important: true
    });
 };

  /*constructor() {
      super();
      this.onLabelClick = () => {
        console.log(`Done: ${this.props.label}`);
      };
   };*/

  render() {

    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }



    return (
      <span className={classNames}>
        <span 
            className="todo-list-item-label" 
            onClick={ this.onLabelClick }>
          { label }
        </span>
        <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick = {
                this.onMarkImportant
              } >
          <i className="fa fa-exclamation" />
        </button>
        <button type="button"
              className = "btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
};

/* 
Состояние хранится в поле state

this.state инициализируется в конструкторе  или в теле класса

После инициализации state нельзя изменять (только читать)

Чтобы обновить state  - использовать setState()
*/
