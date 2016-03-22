import { INCREASE, DECREASE, UPDATENAME } from '../constants'

export function increase(n) {
  return {
    type: INCREASE,
    amount: n
  }
}

export function decrease(n) {
  return {
    type: DECREASE,
    amount: n
  }
}

export function updateName(n) {
  return {
    type: UPDATENAME,
    name: n
  }
}
