import React, { useState, useReducer } from 'react'
import ListTodo from './ListTodo'

export const ACTIONS = {
    ADD_TODO: 'add_todo',
    CPL_TODO: 'completed_todo',
    REMOVE_TODO: 'remove_todo'
}

const reducer = (todos, actions) => {
    switch (actions.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(actions.payload_or_something.action_name)]
        case ACTIONS.CPL_TODO:
            return todos.map(todo =>{
                if (todo.id === actions.payload_or_something.id) {
                    return {...todo, isDone: true}
                }
                return todo
            })
        case ACTIONS.REMOVE_TODO:
            return todos.filter(todo => todo.isDone === false)
        default:
            break;
    }
}

const newTodo = (action_name) => {
    return {id: Date.now(), action_name: action_name, isDone: false}
}

function Todo() {
    const [action, setAction] = useState('')
    const [todos, dispatch] = useReducer(reducer, [])

    const handleClean = (e) => {
        e.preventDefault()
        setAction('')
    }

    const handleAdd = (e) => {
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_TODO, payload_or_something: {action_name: action}})
        setAction('')
    }

    const handleRemove = (e) => {
        e.preventDefault()
        dispatch({type: ACTIONS.REMOVE_TODO})
        setAction('')
    }
    console.log(todos)
  return (
    <div className="flex flex-col gap-6 items-center">
        <form action="">
            <input type="text"
                   className="p-2 rounded-md"
                   value={action}
                   onChange={e => setAction(e.target.value)}
            />
            <div className="flex justify-around mt-4">
                <button onClick={e => handleAdd(e)}>Add</button>
                <button onClick={e => handleClean(e)}>Clean</button>
            </div>
        </form>
        <div>
            <p>List ToDo</p>
            {todos.map(todo => {
                return <ListTodo key={todo.id} todo={todo} dispatch={dispatch}/>
            })}
        </div>
        <button onClick={e => handleRemove(e)}>Remove</button>
    </div>
  )
}

export default Todo