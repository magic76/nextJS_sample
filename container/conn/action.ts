import getSport from '../../api/getSports'
import httpPost from '../../api/service/platformApi'

export default (params) => (dispatch, getState) => {
    httpPost.getGamePlatform('www.google.com',{},3000)
        .then((payload)=>{
            dispatch({type:'SET_GBURL', data: payload})
        })
        .catch(()=>{
            dispatch({type:'SET_GBURL', data: ''})
        })
}
