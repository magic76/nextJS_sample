import * as React from 'react'
import Head from '../component/Head'
import Header from '../component/Header'
import App from '../component/App'
import { connect } from 'react-redux'
import action from '../container/conn/action'
import gbSport from '../container/conn/reducer'

class GbSports extends React.PureComponent<{}, {}> {
    sports: {
        [string: string]: any;
    }
    props: {
        i18n: any;
        action: any;
        gbSport: any;
    }
    // static async getInitialProps ({req, query}) {
    //     // const gbSport = await getSport().then(data=>data.json());
    //     return { sportUrl: 'gbSport.Result '};
    // }
    componentDidMount () {
        this.sports.height = window.innerHeight - 68;
        this.props.action();
    }
    public render() {
        return (
            <div id="divPressOk">
                <Head />
                <Header {...this.props}/>
                <div className="Layout" style={{paddingTop:'68px'}}>
                    <div className="VersionIframe">
                        <iframe id="thirdPartyGameFrame"
                                ref = { ref => this.sports = ref }
                                className="thirdPartyGameFrame bgcolor"
                                scrolling="auto"
                                frameBorder="0"
                                src={this.props.gbSport}
                                width="100%"/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        gbSport: state.gbSport
    };
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return (Object as any).assign({}, ownProps, stateProps, dispatchProps);
}

export default App(connect(mapStateToProps, {action}, mergeProps)(GbSports), {gbSport: gbSport})
