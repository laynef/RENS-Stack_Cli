import React, {Component} from 'react'
import {connect} from 'react-redux'

import Greeting from '../../components/greeting/Greeting'

class MainPage extends Component {

    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div id="mainPage">
                <Greeting />
            </div>
            )
        }
}

export default connect(state => ({
}))(MainPage)