import { toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const Thunk = ({
  key,
  method = 'GET',
  endpointConstructor,
  withAuth = false,
  afterSuccessResponse,
}) => {
  return createAsyncThunk(key, async (body, thunkAPI) => {
    try {
      console.log({
        key,
        method,
        endpointConstructor,
        withAuth,
        afterSuccessResponse,
        body,
      })
      const response = await fetch(
        process.env.REACT_APP_API + endpointConstructor(body, thunkAPI),
        {
          method,
          headers: !withAuth
            ? {
                'Content-Type': 'application/json',
              }
            : {
                'Content-Type': 'application/json',
                Authorization:
                  body?.token || thunkAPI.getState().auth.token || '',
              },
          body: method !== 'GET' ? JSON.stringify(body) : undefined,
        }
      )

      const data = await response.json()

      console.log(data)
      if (!response.ok) {
        throw new Error(data.error)
      }

      if (afterSuccessResponse) {
        await afterSuccessResponse(thunkAPI.dispatch, data)
      }

      return data
    } catch (e) {
      console.log(e)
      toast.error(e.message)
      return thunkAPI.rejectWithValue(e.message)
    }
  })
}
