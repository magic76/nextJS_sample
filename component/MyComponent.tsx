import * as React from 'react'
// import utility from '../util/utility'
// let utility = require('./util/utility')
// export default () =>
//   <div>
//     <p>This is my component</p>
//   </div>

export default class MyComponent extends React.PureComponent<{}, {}> {
  public render() {
    // console.log(utility.getImageUrl('test.stes'));
    return   <div>
        <p>This is my component</p>
      </div>
  }
}
