import { createAsyncThunk } from '@reduxjs/toolkit'
import { getToken } from './token'

export const apiCall = async ({
  method = 'GET',
  url,
  body = {},
  isProtected = false,
}) => {
  try {
    const response = await fetch(
      'https://easybusycamp.herokuapp.com/rest/' + url,
      {
        method,
        headers: {
          'Content-Type': 'application/json',
          // authentication: isProtected ? `Bearer ${getToken()}` : '',
        },
        body: JSON.stringify(body),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      throw new Error('OOOOPS')
    }
    return data
  } catch (error) {
    console.error(error)
    return error
  }

  //
  // if (response.status === 500) console.error('Server respond with status 500')
  //
  // if (response.ok) {
  //   return data
  // }
  //
  // throw 'ERRRRRRRRRORRRRRR'
}
