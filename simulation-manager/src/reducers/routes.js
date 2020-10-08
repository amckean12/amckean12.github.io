const initialState = {
    currentRoute: '/simulation-scheduler'
}
  
export default function reducer(state = initialState, action) {
    switch (action.type){
        case 'NAV_ACTIVE_QUE':
            return {...state, currentRoute: "/active-que"}
        case 'NAV_PROCESS_TRACKER':
            return {...state, currentRoute: "/process-tracker"}
        case 'NAV_SETTINGS':
            return {...state, currentRoute: "/setttings"}
        case 'NAV_SIMULATION_SCHEDULER':
            return {...state, currentRoute: "/simulation-scheduler"}
        default:
            return state;
    }
}