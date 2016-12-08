import React from 'react'

import Greeting from '../../component/Greeting/greeting.jsx'

export default class MainPage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Greeting />
            </div>
            )
        }
}