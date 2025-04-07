import { useState } from 'react'
import classes from './TodoPage.module.css'
import TodoItem from '../components/TodoItem/TodoItem'
import TodoForm from '../components/TodoForm/TodoForm'

function TodoPage() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
    const [todoInputValue, setTodoInputValue] = useState('')

    const todosItems = todos.map((todo, index) => {
        return (
            <TodoItem
                key={index}
                taskName={todo}
                setTodos={setTodos}
                todos={todos}
                todoIndex={index}
            /> // props = {taskName: 'Задача 1'}
        )
    })

    return (
        <div className={classes.container}>
            <h1>Todo List</h1>
            <TodoForm
                todos={todos}
                setTodos={setTodos}
                todoInputValue={todoInputValue}
                setTodoInputValue={setTodoInputValue}
            />
            <div className={classes.todoList}>
                {todosItems}
            </div>
        </div>
    )
}

export default TodoPage
