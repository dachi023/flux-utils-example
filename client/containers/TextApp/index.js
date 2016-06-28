import { Container } from 'flux/utils';
import React from 'react'
import Actions from '../../actions/Actions'
import TextStore from '../../store/TextStore'
import TextInput from '../../components/TextInput'
import TextList from '../../components/TextList'

class TextApp extends React.Component {
  static getStores() {
    return [TextStore]
  }

  static calculateState() {
    return { items: TextStore.getState() }
  }

  render() {
    return (
      <div>
        <TextInput save={this.save} />
        <TextList items={this.state.items} />
      </div>
    )
  }
}

const TextAppContainer = Container.create(TextApp)
export default TextAppContainer
