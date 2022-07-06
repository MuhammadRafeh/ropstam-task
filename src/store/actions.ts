export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const authenticate = (email: string, token: string) => {
  return {
    type: AUTHENTICATE,
    payload: {
      email,
      token
    }
  }
}

export const signin = (email: string, password: string) => {
  return async (dispatch: any) => {

    const response = await fetch('http://buddy.ropstambpo.com/api/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          device_token: 'zasdcvgtghnkiuhgfde345tewasdfghjkm'
        })
      })

    const resData = await response.json();

    if (resData.meta.status == 200) {
      dispatch(authenticate(email, resData.data.access_token))
    } else {
      throw new Error(resData.meta.message);
    }

  }
}
