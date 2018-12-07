export const USER_LOGIN_SUBMIT = 'USER_LOGIN_SUBMIT';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_LOGOUT = 'USER_LOGOUT';
export const ME = 'ME';

export const userLoginSubmit = function(username, password, chainId) {
  return {
    type: USER_LOGIN_SUBMIT,
    username,
    password,
    chainId
  }
};

export const userLoginSuccess = function(username, role, account) {
  return {
    type: USER_LOGIN_SUCCESS,
    username: username,
    role: role,
    account: account
  }
};

export const userLoginFailure = function(error) {
  return {
    type: USER_LOGIN_FAILURE,
    error: error
  }
};

export const me = function() {
  return {
    type: ME
  }
};

export const userLogout = function() {
  return {
    type: USER_LOGOUT,
  }
};