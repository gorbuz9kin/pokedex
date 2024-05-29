import { createSlice } from '@reduxjs/toolkit';

import { Pokemon } from '@/types';

type InitialState = {
  pokemons: Pokemon[] | null;
};

const initialState: InitialState = {
  pokemons: null,
};

const pokemons = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
  },
});

export const { setPokemons } = pokemons.actions;

export default pokemons.reducer;
