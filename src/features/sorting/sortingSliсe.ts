import { createSlice } from '@reduxjs/toolkit';

type SortOption = 'cheap' | 'fast' | 'optimal';

interface SortingState{
sortOption : SortOption;
}

const initialState : SortingState={
sortOption:'cheap',
};

const sortingSlice=createSlice({
name:'sorting',
initialState,
reducers:{
setSortOption:(state,{payload})=>{
state.sortOption=payload;
}
}
});

export const{setSortOption}=sortingSlice.actions;

export default sortingSlice.reducer;