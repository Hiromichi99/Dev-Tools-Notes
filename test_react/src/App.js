import "./App.css";
import { useState, useRef } from "react"
import TodoList  from "./TodoList";

function App(){
    const [todos, setTodos] = useState( // useState:状態を管理するためのフックス（Reactの便利機能） //setTodos:状態を更新するための関数
        []//[{ id: 1, name: "Todo1", completed: false }] 
    ); // todos:配列 useState:todosなどを管理する（なぜ監視するの？→todoリストが増えた際ページのレンダリングを行うため）

    const todoNameRef = useRef(); // useRef:値を保持するためのフック（値を保持するための変数） // todoNameRef.current.valueで値を取得できる

    const handleAddTodo = () => {
        // 新しいタスクを追加する関数
        const name = todoNameRef.current.value; // テキストボックスの値を取得
        if (name === '') return; // 空の場合は追加しない
        setTodos((prevTodos) => {
            return [...prevTodos, { id: prevTodos.length + 1, name: name, completed: false }]; // 新しいタスクを追加してtodosを更新 //...:スプレッド構文:新しい配列を追加する
        })
        todoNameRef.current.value = ''; // テキストボックスを空にする
    }

    const toggleTodo = (id) => {
        // タスクの完了状態を切り替える関数
        const newTodos = [...todos]; // 現在のtodosをコピー
        const todo = newTodos.find(todo => todo.id === id); // idが一致するものを探す
        todo.completed = !todo.completed; // 完了状態を反転させる
        setTodos(newTodos); // 更新されたtodosをセットする
    }

    const handleClear = () => {
        // 完了したタスクを削除する関数
        const newTodos = todos.filter(todo => !todo.completed); // completedがfalseのものだけを残す
        setTodos(newTodos); // 更新されたtodosをセットする
    }
    return <div>
        <TodoList todos={todos} toggleTodo={toggleTodo}/> {/*TodoListというコンポーネントにtodosを渡してー（プロップス）*/}
        <input type="text" ref={todoNameRef}></input> {/*テキストボックスを追加}*/}
        <button onClick={handleAddTodo}>タスクを追加</button> {/*ボタンを追加}*/}
        <button onClick={handleClear}>完了したタスクの削除</button>
        <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div> {/*未完了のタスクの数を表示する。todosの中からcompletedがfalseのものをフィルターして、その長さを表示する*/}
    </div>;
}

export default App;