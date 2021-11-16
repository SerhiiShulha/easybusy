import { createSlice } from '@reduxjs/toolkit'
import updateToken, { deleteToken } from '../../library/utils/networking/token'
import { getCurrentUser } from '../profile/userSlice'
import { Thunk } from '../../library/utils/networking/apiCall'

const signIn = Thunk({
  key: 'auth/signIn',
  method: 'POST',
  endpointConstructor: () => 'user/authenticate',
  afterSuccessResponse: async (dispatch, data) => {
    console.log('sdfsdf')
    await dispatch(
      getCurrentUser({
        userId: data.userId,
        isOrganizer: data.authorities[0] === 'ROLE_ORGANIZER',
        token: data.token,
      })
    )
  },
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
