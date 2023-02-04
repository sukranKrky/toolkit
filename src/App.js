import { useState } from 'react'
import { useSelector } from 'react-redux'
import AddTodo from './todo/add'
import Header from './todo/header'
import TodoList from './todo/list'
import Modal from './todo/modal'

function App() {
  const [language, setLanguage] = useState('tr')
  const [dark, setDark] = useState(true)

  const { open: isModalOpen } = useSelector((state) => state.modal)
  return (
    <main className=" ">
      <Header />
      <AddTodo />
      {isModalOpen && <Modal />}
      <TodoList />
    </main>
  )
}

export default App
