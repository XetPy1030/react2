import {useEffect, useState} from "react";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [name, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const toggleLogin = () => {
    setIsLogin(!isLogin)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    localStorage.setItem('name', e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    localStorage.setItem('password', e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isLogin) {
      // login
    } else {
      // register
    }
  }

  useEffect(() => {
    const name = localStorage.getItem('name')
    const password = localStorage.getItem('password')
    if (name && password) {
      setEmail(name)
      setPassword(password)
    }
  }, [])

  useEffect(() => {
    document.title = !isLogin ? name : 'Не авторизован'
  })

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Exit'}</h1>
      <form onSubmit={handleSubmit}>
        <input type="name" readOnly={!isLogin} value={name} onChange={handleEmailChange} />
        <input type="password" readOnly={!isLogin} value={password} onChange={handlePasswordChange} />
      </form>
      <button onClick={toggleLogin}>{isLogin ? 'Login' : 'Exit'}</button>
    </div>
  )
}