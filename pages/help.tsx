import * as React from 'react'
import MyComponent from '../component/MyComponent'
import Head from '../component/Head'
import App from '../component/App'
import Router from 'next/router'

class Help extends React.PureComponent<{}, {}> {
    public render() {
        console.log(this.props)
        return (
            <div>
                <Head />
                <div>
                    <span onClick={() => Router.push('/help')}>click here for client route change</span>
                </div>
                <h1>help</h1>
                <MyComponent />
            </div>
        )
    }
}

export default App(Help, null)
