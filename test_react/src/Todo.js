import React from 'react'

function Todo({todo, toggleTodo}) {

    const handleTodoClick = () => {
        toggleTodo(todo.id); // toggleTodo:タスクの完了状態を切り替える関数 // todo.id:タスクのID
    }
  return (
    <div>
        <label> 
            <input type="checkbox" 
            checked={todo.completed} // checked:チェックボックスがオンかオフかを示す
            readOnly // readOnly:チェックボックスを変更できないようにする
            onChange={handleTodoClick} // onChange:チェックボックスの状態が変わったときに呼ばれる関数 
            />
        </label>
        {todo.name}
    </div>
  )
}

export default Todo