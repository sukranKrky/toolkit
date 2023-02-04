import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { addTodoHandle } from '../utils'

export default function AddTodo() {
  const { user } = useSelector((state) => state.auth)

  const [todo, setTodo] = useState('')

  const submitHandle = (e) => {
    e.preventDefault()

    addTodoHandle({
      title: todo,
      done: false,
      id: nanoid(),
      user: user.id,
    })
    setTodo('')
  }
  return (
    <form onSubmit={submitHandle} className="">
      <input
        className=" w-auto h-20 rounded-xl  pl-9 text-lg bg-purple-200  border-purple-300 border-2 text-blue-600 focus:outline-none m-8 "
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Todo Yazın..."
      />
      <button
        className="w-40 h-20 rounded-full bg-black text-lg text-purple-500 cursor-pointer hover:bg-slate-500 "
        disabled={!todo || !user}
        type="submit"
      >
        Ekle
      </button>
    </form>
  )
}
