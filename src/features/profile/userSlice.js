import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Thunk } from '../../library/utils/networking/apiCall'
import { toast } from 'react-toastify'

const getCurrentUser = Thunk({
  key: 'user/get',
  withAuth: true,
  endpointConstructor: (data, thunkAPI) => {
    let isOrganizer, userId

    if (data) {
      isOrganizer = data.isOrganizer
      userId = data.userId
    } else {
      isOrganizer = thunkAPI.getState().auth.isOrganizer
      userId = thunkAPI.getState().auth.userId
    }
    console.log({ isOrganizer, userId })

    return (isOrganizer ? `organizers/` : `parents/`) + userId
  },
})

const updateCurrentUser = Thunk({
  key: 'user/update',
  withAuth: true,
  method: 'POST',
  endpointConstructor: (_, thunkAPI) => {
    const { isOrganizer, userId } = thunkAPI.getState().auth
    return `${(isOrganizer ? 'organizers/' : 'parents/') + userId}/update`
  },
})

const updateCurrentUserPhoto = createAsyncThunk(
  'user/update-photo',
  async (body, thunkAPI) => {
    const { isOrganizer, userId } = thunkAPI.getState().auth
    const endpoint = `${
      (isOrganizer ? 'organizers/' : 'parents/') + userId
    }/photo`

    try {
      const response = await fetch(process.env.REACT_APP_API + endpoint, {
        method: 'PUT',
        headers: {
          Authorization: thunkAPI.getState().auth.token,
        },
        body,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error)
      }
      console.log({ data })

      return data.image
    } catch (e) {
      console.log(e)
      toast.error(e.message)
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

const deleteCurrentUserPhoto = Thunk({
  key: 'user/photo/delete',
  withAuth: true,
  method: 'DELETE',
  endpointConstructor: (_, thunkAPI) => {
    const { userId, isOrganizer } = thunkAPI.getState().auth
    return `${(isOrganizer ? 'organizers/' : 'parents/') + userId}/photo`
  },
})

const updateParentAddress = Thunk({
  key: 'user/parent/address/update',
  withAuth: true,
  method: 'POST',
  endpointConstructor: ({ id: addressId }, thunkAPI) => {
    const { userId } = thunkAPI.getState().auth
    return 'parents/' + userId + '/address/' + addressId + '/update'
  },
})

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
      // state.data = action.payload
    })
    builder.addCase(updateCurrentUserPhoto.fulfilled, (state, action) => {
      state.data.photo = action.payload
    })
    builder.addCase(deleteCurrentUserPhoto.fulfilled, (state, action) => {
      state.data.photo = null
    })
    builder.addCase(updateParentAddress.fulfilled, (state, action) => {
      state.data.address = action.payload
    })
  },
})

export {
  getCurrentUser,
  updateCurrentUser,
  updateCurrentUserPhoto,
  deleteCurrentUserPhoto,
  updateParentAddress,
}
export default userSlice.reducer
