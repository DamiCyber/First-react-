import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        value: { userName: '' }
    },
    reducers: {
        login: (state, action) => {
            state.value.userName = action.payload;
        },
        logout: (state) => {
            state.value = { userName: '' };
        }
    }
});

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
