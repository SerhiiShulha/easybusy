import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PURGE } from 'redux-persist'

const getCurrentUser = createAsyncThunk(
  'user/get',
  async ({ userId, isOrganizer, token }, thunkAPI) => {
    const url = (isOrganizer ? `organizers/` : `parents/`) + userId
    try {
      const response = await fetch(process.env.REACT_APP_API + url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.error) {
          throw new Error(data.error)
        } else {
          throw new Error('OOOOPS')
        }
      }

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const updateCurrentUser = createAsyncThunk(
  'user/update',
  async ({ userData }, thunkAPI) => {
    const { isOrganizer, userId, token } = thunkAPI.getState().auth
    const url = (isOrganizer ? `organizers/` : `parents/`) + userId
    try {
      const response = await fetch(process.env.REACT_APP_API + url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.error) {
          throw new Error(data.error)
        } else {
          throw new Error('OOOOPS')
        }
      }

      return userData
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const initialState = {
  data: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.data = action.payload
    })
    builder.addCase(updateCurrentUser.fulfilled, (state, action) => {
      state.data = action.payload
    })
    builder.addCase(PURGE, () => initialState)
  },
})

export { getCurrentUser, updateCurrentUser }
export default userSlice.reducer
