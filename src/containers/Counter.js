import React from 'react'
import { useSelector, useDispatch/* connect */ } from 'react-redux'

import {updateCount} from '../store/actions'

function Counter(props) {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(updateCount(1))}>INCREMENT</button>
      <button onClick={() => dispatch(updateCount(-1))}>DECREMENT</button>
    </>
  )
}

export default Counter

// function mapStateToProps(state) {
//   return {
//     count: state.count
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     increment() {
//       dispatch({ type: 'INCREMENT' })
//     },
//     decrement() {
//       dispatch({ type: 'DECREMENT' })
//     },
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)
