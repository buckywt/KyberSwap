import { REHYDRATE } from 'redux-persist/lib/constants'
import Rate from "../services/rate"
import BigNumber from "bignumber.js"

const initState = {
  currentBlock: 0,
  connected: true,
  termOfServiceAccepted: false,
  nodeName: "Infura Kovan",
  nodeURL: "https://kovan.infura.io/0BRKxQ0SFvAxGL72cbXi",
}

const global = (state = initState, action) => {
  switch (action.type) {
    case "GLOBAL.NEW_BLOCK_INCLUDED_FULFILLED": {
      return { ...state, currentBlock: action.payload }
    }
    case "GLOBAL.GET_NEW_BLOCK_FAILED": {
      return { ...state, connected: false }
    }
    case "GLOBAL.TERM_OF_SERVICE_ACCEPTED": {
      return { ...state, termOfServiceAccepted: true }
    }
    case "GLOBAL.IDLE_MODE": {
      return { ...state, idleMode: true }
    }
    case "GLOBAL.EXIT_IDLE_MODE": {
      return { ...state, idleMode: false }
    }
  }
  return state
}

export default global
