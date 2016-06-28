import React from 'react'
import Actions from '../../actions/Actions'

class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({ text: '' })
    Actions.changeText(this.state.text)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleClick.bind(this)}>
          Save
        </button>
      </div>
    )
  }
}

export default TextInput
