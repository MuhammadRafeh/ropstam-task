export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const authenticate = (token: string, userId: string) => {
  return {
    type: AUTHENTICATE,
    payload: {
      userId,
      token
    }
  }
}

export const signin = (email: string, password: string) => {
  return async (dispatch: any) => {

    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCTx9JvqK5eK8G7mbq9kKNRH-Yrzjwczew',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        })
      })
    if (!response.ok) {
      const resData = await response.json();
      let message = 'Something went wrong!';
      if (resData.error.message === 'EMAIL_NOT_FOUND') {
        message = 'Email not found!'
      }
      else if (resData.error.message === 'INVALID_PASSWORD') {
        message = 'Password is not Correct!'
      }
      else if (resData.error.message === 'USER_DISABLED') {
        message = 'User is currently Disabled'
      }

      throw new Error(message);

    }
    const resData = await response.json();
    console.log(resData, 'responseData');
    // dispatch(authenticate(resData.idToken, resData.localId))
  }
}
