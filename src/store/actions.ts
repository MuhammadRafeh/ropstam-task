import AsyncStorage from '@react-native-async-storage/async-storage';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const authenticate = (token, userId) => {
  return {
    type: AUTHENTICATE,
    payload: {
      userId,
      token
    }
  }
}

const setAsyncStorageUserData = (token, userId, expiresIn) => {
  const expiryDate = new Date(new Date().getTime() + parseInt(expiresIn) * 1000).toISOString();
  AsyncStorage.setItem('userData', JSON.stringify({
    token,
    userId,
    expiryDate
  }))
}

export const signin = (email, password) => {
  return async dispatch => {

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
      // throw new Error('Something went wrong!');
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
    console.log(resData);
    dispatch(authenticate(resData.idToken, resData.localId))
    setAsyncStorageUserData(resData.idToken, resData.localId, resData.expiresIn);
  }
}
