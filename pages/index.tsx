import * as React from 'react'
import MyComponent from '../component/MyComponent'
import Head from '../component/Head'
import Router from 'next/router'
import App from '../component/App'
// import getData from '../api/sampleUsage'

class Index extends React.PureComponent<{}, {}> {
    static async getInitialProps () {
        // var qq = await getData().then((data)=>data.json());
        // console.log(await qq.json())
        return { custom: 'qq' }
    }

    componentDidMount() {
      // console.log('test client fetch pollyfill')
      // fetch('//offline-news-api.herokuapp.com/stories')
    	// .then(function(response) {
  		// if (response.status >= 400) {
  		// 	throw new Error("Bad response from server");
  		// }
  		// return response.json();
    	// })
    	// .then(function(stories) {
    	// 	console.log(stories);
    	// });
    }

    public render() {
        return (
            <div>
                <Head />
                <div style={{height: '60px'}}>
                    <span onClick={() => Router.push('/help')}>GO TO HELP PAGE WITH CLIENT</span>
                </div>
                <a href="/help" >GO TO HELP PAGE WITH SERVER</a>

                <h1>Hello world!a</h1>
                <MyComponent />
            </div>
        )
    }
  }

  export default App(Index, null)
