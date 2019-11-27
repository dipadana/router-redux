import React from 'react'
import {
  withRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { useSelector } from 'react-redux'

function Profile(props) {
  const user = useSelector(state => state.user)

  return (
    <>
      <h2>Hello {user.name} {user.surname}</h2>
      <img src={user.photo} alt="profile_picture" /><br /><br />
      <Link to={`${props.match.url}/bio`}>
        <h3 style={{ display: 'inline' }}>Bio</h3>
      </Link>
      <Link to={`${props.match.url}/contact`}>
        <h3 style={{ display: 'inline', marginLeft: '2rem' }}>Contact</h3>
      </Link>

      <Switch>
        <Route path={`${props.match.path}/bio`}>
          <p>name: {user.name}</p>
          <p>surname: {user.surname}</p>
          <p>gender: {user.gender}</p>
          <p>region: {user.region}</p>
          <p>age: {user.age}</p>
        </Route>
        <Route path={`${props.match.path}/contact`}>
          <p>phone: {user.phone}</p>
          <p>email: {user.email}</p>
        </Route>
      </Switch>
    </>
  )
}

export default withRouter(Profile)