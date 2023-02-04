import { addTodo, deleteTodo } from './stores/todo'
import store from './stores'
import { login, logout } from './stores/auth'
import { closeModal, openModal } from './stores/modal'

export const addTodoHandle = (todo) => {
  store.dispatch(addTodo(todo))
}
export const deleteTodoHadle = (todo) => {
  store.dispatch(deleteTodo(todo))
}

export const loginHandle = (user) => {
  store.dispatch(login(user))
}
export const logoutHandle = () => {
  store.dispatch(logout())
}

export const modal = (name, data = false) => {
  store.dispatch(
    openModal({
      name,
      data,
    }),
  )
}

export const close = () => {
  store.dispatch(closeModal())
}
