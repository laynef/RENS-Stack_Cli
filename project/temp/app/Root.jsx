import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import styles from './sass/index'

import MasterPage from './pages/MasterPage'
import MainPage from './pages/MainPage/MainPage'

import storeConfig from './redux/store/configStore'

let store = storeConfig()

class Root extends React.Component {

    getChildContext() {
        return {
            store: this.props.store
        }
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={MasterPage}>
                    <IndexRoute component={MainPage} />

                    </Route>
                </Router>
            </Provider>
            )
        }
}

Root.childContextTypes = {
    store: React.PropTypes.object
}

ReactDOM.render(<Root />, document.getElementById('app'))