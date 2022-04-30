import { createSlice,  } from "@reduxjs/toolkit";


const initialSwitchState = { isSwitch: false };


const switchSlice = createSlice({
    name: 'switch', 
    initialState: initialSwitchState,
   
    reducers: {
        weatherPage(state){
            state.isSwitch = true;
        },
        nowWhat(state){
            state.isSwitch = false;
        },

    }
});

export const switchActions = switchSlice.actions;


export default switchSlice.reducer