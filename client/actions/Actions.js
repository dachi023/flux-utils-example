import { dispatch } from '../dispatcher/Dispatcher'

const Actions = {
  changeText: (text) => {
    dispatch({
      type: 'change_text',
      text: text
    })
  }
}
export default Actions
