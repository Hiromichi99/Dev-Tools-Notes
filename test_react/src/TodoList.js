import React from 'react'
import Todo from './Todo';
// 1ファイル1コンポーネント？

// // コンポーネントの定義
// const TodoList = ({todos}) => { // propsとして return  <div>{props.todos}</div>;でもおｋ
//   return  <div>{todos}</div>; // App.jsのプロップスで渡したtodosを受け取る
// };// 一つのコンポーネント

// App.jsからもらった["Todo1","Todo2"]をひとつずつに分けTodoコンポーネントに渡す
const TodoList = ({todos, toggleTodo}) => { 
  return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>); // map:配列の要素をひとつずつ取り出す // key:それぞれの要素の見分けつけられる
}; // 取り出したものを一つずつTodoコンポーネントに渡す

export default TodoList;