import React, {Component} from 'react'
import { connect } from 'react-redux'

class Main extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      
    }
  }

  // componentDidMount() {
  //   const { store } = this.context
  //   this.unsubscribe = store.subscribe(() => this.forceUpdate())
  // }

  // componentWillUnmount() {
  //   this.unsubscribe()
  // }

  render() {
    return (
      <div id="MainComponent">
          {/* Fill me in */}
      </div>
    )
  }

}

Main.contextTypes = {
  store: React.PropTypes.object
}

export default connect()(Main)