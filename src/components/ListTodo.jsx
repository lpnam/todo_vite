import React from 'react'
import { ACTIONS } from './Todo'

function ListTodo({ todo, dispatch }) {
    const handleComplete = (e) => {
        e.preventDefault()
        dispatch({type: ACTIONS.CPL_TODO, payload_or_something: {id: todo.id}})
    }
  return (
    <div className="flex gap-2 justify-around mb-2">
        <p style={{ color: todo.isDone ? '#7CFC00':'#AAA' }}>{todo.action_name}</p>
        <button
            className="hover:border-green-700"
            onClick={e => handleComplete(e)}
        >
            Completed
        </button>
    </div>
  )
}

export default ListTodo