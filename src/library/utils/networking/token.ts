const updateToken = (token: string, remember = false) => {
  const expirationDate = new Date(
    new Date().setMonth(new Date().getMonth() + 6)
  )
  const tokenCookie = remember
    ? `token=${token}; expires=${expirationDate}`
    : `token=${token}; max-age=1800`

  if (process.env.NODE_ENV === 'production') {
    document.cookie = tokenCookie + '; secure'
  } else {
    document.cookie = tokenCookie
  }
}

export const prolongToken = () => {
  const tokenCookie = `token=${getToken()}; max-age=1800`

  if (process.env.NODE_ENV === 'production') {
    document.cookie = tokenCookie + '; secure'
  } else {
    document.cookie = tokenCookie
  }
}

export const deleteToken = () => {
  document.cookie = `token= ; max-age=-1`
}

export const getToken = () => {
  const tokenStr = document.cookie.match(
    new RegExp('(^| )' + 'token' + '=([^;]+)')
  )
  return tokenStr ? decodeURIComponent(tokenStr[2]) : undefined
}

export default updateToken
