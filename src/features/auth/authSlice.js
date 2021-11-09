import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import updateToken, { deleteToken } from '../../library/utils/networking/token'
import { getCurrentUser } from '../profile/userSlice'

const signIn = createAsyncThunk('auth/signIn', async (body, thunkAPI) => {
  try {
    const response = await fetch(
      'https://easybusycamp.herokuapp.com/rest/' + 'user/authenticate',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    )

    const data = await response.json()
    console.log(data)

    if (!response.ok) {
      if (data.error) {
        throw new Error(data.error)
      } else {
        throw new Error('OOOOPS')
      }
    }

    await thunkAPI.dispatch(
      getCurrentUser({
        userId: data.userId,
        isOrganizer: data.authorities[0] === 'ROLE_ORGANIZER',
        token: data.token,
      })
    )

    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

const initialState = {
  isAuthorized: false,
  userId: null,
  isOrganizer: false,
  isParent: false,
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: () => {
      deleteToken()
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, function (state, action) {
      state.isAuthorized = true
      state.userId = action.payload.userId
      state.isOrganizer = action.payload.authorities[0] === 'ROLE_ORGANIZER'
      state.isParent = action.payload.authorities[0] === 'ROLE_PARENT'
      state.token = action.payload.token

      if (action.payload.token) {
        updateToken(action.payload.token)
      }

      // return action.payload.userId
    })
  },
})

export const { signOut } = authSlice.actions
export { signIn }
export default authSlice.reducer
