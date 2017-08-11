const param = require('jquery-param')
import fetchHandler from '../util/fetch';
// import storage from '../util/storage';

const httpPost = (url, data, timeout) => {
    // const sendData = {
    //     inputdata: data,
    //     token: storage.getCookie(config.token)
    // }
    const sendData = {
        inputdata: data,
        token: ''
    }
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: param(sendData)
    }
    // return fetchHandler(fetch(url, option), timeout).catch(() => console.log(url, "response failed"));
    return fetchHandler(fetch(url, option), timeout)
        .then(data=>data.json())
        .then((result)=>{
            return result;
        })
        .catch(() => console.log(url, "response failed"));
}
export default httpPost;
