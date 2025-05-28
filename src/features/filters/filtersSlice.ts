import { createSlice } from '@reduxjs/toolkit';

interface FiltersState {
  airlinesFilter: string[]; 
  stopsFilter: number[];     
}

const initialState : FiltersState= {
  airlinesFilter : [],
  stopsFilter : [],
};

const filtersSlice = createSlice({
    name:'filters',
    initialState,
    reducers:{
        toggleAirline(state,{payload}){
            if(state.airlinesFilter.includes(payload)){
                state.airlinesFilter= state.airlinesFilter.filter(a=>a!==payload);
            }else{
                state.airlinesFilter.push(payload);
            }
        },
        toggleStops(state,{payload}){
            if(state.stopsFilter.includes(payload)){
                state.stopsFilter= state.stopsFilter.filter(s=>s!==payload);
            }else{
                state.stopsFilter.push(payload);
            }
        },
        resetFilters(){
            return initialState;
        }
    }
});

export const {toggleAirline,toggleStops,resetFilters} = filtersSlice.actions;

export default filtersSlice.reducer;