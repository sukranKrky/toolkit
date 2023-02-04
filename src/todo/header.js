import { useSelector } from 'react-redux'
import { loginHandle, logoutHandle } from '../utils'

export default function Header() {
  const { user } = useSelector((state) => state.auth)

  const login = (user) => {
    loginHandle(user)
  }

  return (
    <header
      className="relative h-60 w-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
    "
    >
      <h2 className="ml-12 pt-8 text-5xl">Logo</h2>
      {!user && (
        <nav className="m-2 ">
          <button
            className="rounded-full m-6 bg-slate-700 w-40 h-12 text-yellow-400 hover:bg-slate-500 "
            onClick={() => login({ id: 1, userName: 'Şükran' })}
          >
            Şükran Giriş Yap
          </button>
          <button
            className="rounded-full bg-slate-700 w-40 h-12 text-yellow-400 hover:bg-slate-500 "
            onClick={() => login({ id: 2, userName: 'Prototurk' })}
          >
            Prototurk Giriş Yap
          </button>
        </nav>
      )}

      {user && (
        <nav className="felx ">
          <h2 className="ml-12 pt-8 text-5xl text-white">
            Hoşgeldin, {user.userName}
          </h2>
          <button
            className="rounded-full bg-slate-700 w-40 h-12 m-5 ml-12 text-yellow-400"
            onClick={() => logoutHandle()}
          >
            {user.userName} Çıkış Yap
          </button>
        </nav>
      )}
    </header>
  )
}
