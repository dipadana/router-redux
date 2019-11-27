import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
import { useSelector } from 'react-redux'

import Counter from './containers/Counter'
import What from './containers/What'
import Why from './containers/Why'
import Where from './containers/Where'
import Profile from './containers/Profile'
import Login from './containers/Login'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'

window.store = store


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Flex>
          <Box width={1 / 4} style={{ borderRightStyle: "solid" }}>
            <ul>
              <li>
                <Link to="/what"><h1>What</h1></Link>
              </li>
              <li>
                <Link to="/why"><h1>Why</h1></Link>
              </li>
              <li>
                <Link to="/where"><h1>Where</h1></Link>
              </li>
              <li>
                <Link to="/profile"><h1>Profile</h1></Link>
              </li>
            </ul>
          </Box>
          <Box width={3 / 4} style={{ marginLeft: "1em" }}>
            <Switch>
              <Route path="/what">
                <What />
              </Route>
              <Route path="/where">
                <Where />
              </Route>
              <Route path="/why">
                <Why />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route exact path="/">
                <h1>HOME</h1>
                <Counter />
              </Route>
              <PrivateRoute path="/profile">
                <Profile />
              </PrivateRoute>
            </Switch>
          </Box>
        </Flex>
      </Router>
    </Provider>
  )
}

export default App


function PrivateRoute(props) {
  const user = useSelector(state => state.user)
  const location = useLocation()

  return (
    <Route path={props.path}>
      {
        user
          ? props.children
          : <Redirect
            to={{
              pathname: "/login",
              state: { from: location.pathname }
            }}
          />
      }
    </Route>
  )
}