import { useSelector } from 'react-redux'
import { deleteTodoHadle, modal } from '../utils'
export default function TodoItem({ todo }) {
  const { user } = useSelector((state) => state.auth)
  const deleteHandle = () => {
    deleteTodoHadle(todo.id)
  }
  const editHandle = () => {
    modal('edit-todo', todo)
  }
  return (
    <li className="flex list-disc	text-xl m-8 rounded-m bg-slate-200 h-24 rounded-lg">
      <label className=" m-8">
        {todo.title} - {todo.user}
      </label>
      {todo.user === user.id && (
        <div className="flex m-8">
          <button
            className="w-20 h-10 rounded-lg  bg-black text-lg text-blue-500 hover:bg-slate-500 "
            onClick={editHandle}
          >
            Düzenle
          </button>
          <button
            className="w-20 h-10 rounded-lg bg-black text-lg text-red-500 hover:bg-slate-500 "
            onClick={deleteHandle}
          >
            Sil
          </button>
        </div>
      )}
    </li>
  )
}
