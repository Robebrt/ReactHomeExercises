// usersSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { User } from '../components/UserCard/types'; 

export const fetchUsers = createAsyncThunk<User[], number>(
  'users/fetchUsers',
  async (numUsers: number) => {
    const response = await fetch(`https://randomuser.me/api/?results=${numUsers}`);
    const data = await response.json();
    return data.results;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: [] as User[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default usersSlice.reducer;
