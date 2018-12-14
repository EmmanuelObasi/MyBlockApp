import { takeLatest, put, call } from 'redux-saga/effects';
import {
  USER_BALANCE_SUBMIT,
  userBalanceSuccess,
  userBalanceFailure
} from './user-badge.actions';
import { API_URL, API_MOCK } from '../../../../environment';
import { handleApiError } from '../../../../lib/apiErrorHandler';

const balanceUrl = API_URL + '/users/:username/balance?chainId=:chainId';

function balanceApiCall(username, chainId) {
  if (API_MOCK) {
    return new Promise(function (resolve, reject) {
      resolve({
        data: {
          balance: 1000
        }
      });
    });
  }
  else {
    return fetch(balanceUrl.replace(':username', username).replace(':chainId', chainId), {
      method: 'GET',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json'
      }
    })
      .then(handleApiError)
      .then(function (response) {
        return response.json();
      })
      .catch(function (error) {
        throw error;
      });
  }
}

function* submitGetBalance(action) {
  try {
    const response = yield call(balanceApiCall, action.username, action.chainId);
    yield put(userBalanceSuccess(response.data.balanceString));
  }
  catch (err) {
    yield put(userBalanceFailure(err));
  }
  // browserHistory.push('/projects');
}

export default function* watchBalanceSubmit() {
  yield takeLatest(USER_BALANCE_SUBMIT, submitGetBalance);
}
