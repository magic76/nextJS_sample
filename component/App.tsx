import * as React from 'react'
require('es6-promise').polyfill();
import 'isomorphic-fetch';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

// thunk usage for dispathc and getState in middleware
const middleware = [ thunk ];
const langs = require('../lang/zh-cn.json');
const config = {
    env: 'dev',
    lang: 'zh-cn',
    i18n: langs
}

const HOC = (Child, reducers) => {
	return class App extends React.Component {
    state: {
        store: any;
    }
    constructor(props) {
        super(props);
        if (reducers) {
            const store = createStore(combineReducers(reducers), applyMiddleware(...middleware));
            this.state = {store : store};
        }
    }
		static getInitialProps(ctx) {
        if (Child.hasOwnProperty('getInitialProps')) {
            return Child.getInitialProps(ctx)
        } else {
            return {};
        }
		}
    render() {
        if (reducers) {
            return (
                <Provider store={this.state.store}>
                    <Child {...config} {...this.props}/>
                </Provider>
            )
        } else {
            return (
                <Child {...config} {...this.props}/>
            )
        }

    }
	}
}
export default HOC
