import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import styles from './sass/index.scss'

import MasterPage from './pages/MasterPage.jsx'
import MainPage from './pages/MainPage/MainPage.jsx'

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