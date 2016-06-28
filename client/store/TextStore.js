import { ReduceStore } from 'flux/utils'
import Dispatcher from '../dispatcher/Dispatcher'

class TextStore extends ReduceStore {
  getInitialState() {
    return []
  }

  reduce(state, action) {
    switch (action.type) {
      case 'change_text':
        state.push({ text: action.text })
        return state.slice(0)

      default:
        return state
    }
  }
}

const instance = new TextStore(Dispatcher)
export default instance
