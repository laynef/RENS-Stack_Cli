import React from 'react'

import Greeting from '../../components/greeting/Greeting'

export default class MainPage extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Greeting />
            </div>
            )
        }
}