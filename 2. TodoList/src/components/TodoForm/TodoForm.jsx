import classes from './TodoForm.module.css'

function TodoForm({ todos, setTodos, todoInputValue, setTodoInputValue }) {
    function addTodo(event) {
        event.preventDefault()
        // Falsy values
        // undefined, '', null, false, 0
        if(!todoInputValue.trim()) {
            alert('Task name is empty!')
            return
        }
        const updatedTodos = [...todos, todoInputValue.trim()]
        localStorage.setItem('todos', JSON.stringify(updatedTodos))
        setTodos(updatedTodos) // ['Taks 1', 'Task 2' 'Task 3', '*Какая то задача']
        setTodoInputValue('') // value в инпуте тоже очищается
    }

    function changeInputValue(event) {
        setTodoInputValue(event.target.value)
    }

    return (
        <form className={classes.todoForm}>
            <input value={todoInputValue} onChange={changeInputValue} placeholder='Enter task name' type="text" />
            <button onClick={addTodo}>Add</button>
        </form>
    )
}

export default TodoForm
