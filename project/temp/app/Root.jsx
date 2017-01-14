import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import styles from './sass/index'

import MasterPage from './pages/MasterPage'
import MainPage from './pages/MainPage/MainPage'

class Root extends React.Component {

    render() {
        return (
            <Router history={ browserHistory }>
                <Route path="/" component={MasterPage}>
                <IndexRoute component={MainPage} />

                </Route>
            </Router>
            )
        }
}

ReactDOM.render(<Root />, document.getElementById('app'))