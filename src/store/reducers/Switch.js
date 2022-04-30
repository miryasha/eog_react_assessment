import * as actions from "../actions";

const initialSwitchState = { isSwitch: false };


const weatherPage =(state, action)=>{
    return {...state, error: action.error}
}

const nowWhat =(state, action)=>{
    return {...state, error: action.error}
}


const handlers = {
    [actions.SWITCH_WEATHER]: weatherPage
    [actions.SWITCH_NOWWHAT]: nowWhat
  };

export default (state = initialState, action)=>{
    const handler = handlers[action.type];
    if (typeof handler === 'undefined') return state;
    return handler(state, action);
}