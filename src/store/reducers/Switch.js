import * as actions from "../actions";

const initialState = false;


const chartPage =(state, action)=>{
     return action = !initialState;
}

const nowWhat =(state, action)=>{
    return action = initialState;
}


const handlers = {
    [actions.SWITCH_CHART]: chartPage,
    [actions.SWITCH_NOWWHAT]: nowWhat
}

export default (state = initialState, action)=>{
    const handler = handlers[action.type];
    if (typeof handler === 'undefined') return state;
    return handler(state, action);
}