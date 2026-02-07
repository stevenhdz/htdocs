import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nombre: '',
  edad: 0,
};

const sharedSlice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    setPersona(state, action) {
      state.nombre = action.payload.nombre;
      state.edad = action.payload.edad;
    },
  },
});

export const { setPersona } = sharedSlice.actions;
export default sharedSlice.reducer;
//UI → dispatch → reducer → store → selector → UI