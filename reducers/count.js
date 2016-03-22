import { INCREASE, DECREASE, UPDATENAME } from '../constants'

const initialState = {
  number: 1,
  name: 'Test'
}

export default function update(state = initialState, action) {
  if(action.type === INCREASE) {
    return {
      number: state.number + action.amount,
      name: state.name
    }
  } else if(action.type === DECREASE) {
    return {
      number: state.number - action.amount,
      name: state.name
     }
  } else if(action.type === UPDATENAME) {
    return {
      number: state.number,
      name: action.name
    }
  }
  return state
}
