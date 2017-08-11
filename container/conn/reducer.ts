export default (state = '', action) => {
    switch (action.type) {
        case 'SET_GBURL':
          state = action.data || ''
          break;
    }
    return state;
}
