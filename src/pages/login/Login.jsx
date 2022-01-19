import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { login } from "../../redux/apiCall"

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(dispatch, {username, password})
    history.push('/')
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{
        display: 'flex', 
        height: '100vh',
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <input 
        type='text' 
        placeholder='username'
        onChange={e => setUsername(e.target.value)}
        style={{padding: 10, marginBottom: 20}}
      />
      <input 
        type='text' 
        placeholder='password'
        onChange={e => setPassword(e.target.value)}
        style={{padding: 10, marginBottom: 20}}
      />
      <button 
        type='submit'
        style={{padding: 10, width: 100}}>Login</button>
    </form>
  )
}
