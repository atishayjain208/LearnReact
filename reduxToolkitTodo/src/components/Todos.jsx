import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos || [])
  const dispatch = useDispatch()

  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState("")

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {/* TEXT / INPUT */}
            {editId === todo.id ? (
              <input
                className="text-white bg-zinc-800 px-2 py-1 rounded"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            <div className="flex gap-2">
              {/* EDIT / SAVE */}
              {editId === todo.id ? (
                <button
                  onClick={() => {
                    dispatch(updateTodo({ id: todo.id, text: editText }))
                    setEditId(null)
                    setEditText("")
                  }}
                  className="text-white bg-green-500 border-0 py-1 px-4 hover:bg-green-600 rounded text-md"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditId(todo.id)
                    setEditText(todo.text)
                  }}
                  className="text-white bg-blue-500 border-0 py-1 px-4 hover:bg-blue-600 rounded text-md"
                >
                  Edit
                </button>
              )}

              {/* DELETE */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 hover:bg-red-600 rounded text-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
