const initialState = {
    currentProcessor: 'wichita'
}
  
export default function reducer(state = initialState, action) {
    switch (action.type){
        case 'WICHITA_PROCESSOR':
            return {...state, currentProcessor: "wichita"}
        case 'TOPEKA_PROCESSOR':
            return {...state, currentProcessor: "topeka"}
        case 'HOUSTON_PROCESSOR':
            return {...state, currentProcessor: "houston"}
        default:
            return state;
    }
}