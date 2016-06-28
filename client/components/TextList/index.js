import React from 'react'

class TextList extends React.Component {
  render() {
    const items = this.props.items.map((item, index) => {
      return <p key={index}>{item.text}</p>
    })
    return (
      <div>{items}</div>
    )
  }
}

export default TextList
