import React, { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../store/actions'

function Login(props) {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()

  const user = useSelector(state => state.user)

  useEffect(() => {
    if (user) {
      const from = location.state ? location.state.from : '/'
      history.replace(from)
    }
  }, [user, history, location])

  const handleLogin = () => {
    dispatch(login())
  }

  return (
    <button onClick={handleLogin}>
      LOGIN
    </button>
  )
}

export default Login