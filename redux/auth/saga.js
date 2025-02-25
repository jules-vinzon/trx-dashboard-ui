import { all, takeEvery, fork, put, call } from 'redux-saga/effects'
import { encryptRequest } from 'helpers/encryptor.js';
import { post, fetchWithForbidden } from 'helpers/resApiRequestor.js';
import actions from './actions';
import { clearToken } from 'helpers/localStorageHelper.js';


let headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export function* login() {
  yield takeEvery('LOG_IN', function* ({ payload }) {
    try {
      console.log('[LOG_IN][SAGA]: CHECK PAYLOAD', payload);

      yield put({
        type: actions.LOGGING_IN,
      });

      const requestId = payload.request_id;
      
      const getPublicKeyData = {
        request_id: requestId
      }

      const publicKeyResponse = yield getPublicKey(getPublicKeyData);
      console.log('[LOG_IN][SAGA]: CHECK GET PUBLIC KEY RESPONSE', publicKeyResponse);

      if (publicKeyResponse.data.success) {
        const publicKey = publicKeyResponse.data.public_key;

        delete payload.request_id;
        const encryptedData = encryptRequest(payload, publicKey);
        console.log('[LOG_IN][SAGA]: CHECK ENCRYPTED DATA', encryptedData);

        const newLoginData = {
          request_id: requestId,
          encdata: encryptedData
        }
        console.log('[LOG_IN][SAGA]: CHECK NEW LOGIN DATA', newLoginData);

        const loginResponse = yield loginRequest(newLoginData);
        console.log('[LOG_IN][SAGA]: CHECK LOGIN RESPONSE', loginResponse);

        if (loginResponse.status === 200) {
          
          yield put({
            type: actions.LOG_IN_SUCCESS,
            token: loginResponse.data.data.token,
            pubKey: publicKey,
            loginSuccess: true,
            loginData: loginResponse.data.data.user
          })
        } else {
          yield put({
            type: actions.LOG_IN_FAILED,
            loginSuccess: false,
            error: loginResponse.response.data.message
          })
        }

      }
    } catch (e) {
      console.log('[LOG_IN][SAGA]: INTERNAL ERROR', e);
      yield put({
        type: actions.LOG_IN_ERROR,
        error: 'Login Error',
        loginSuccess: false
      });
    }
  })  
}
export function* refetchAuth() {
  yield takeEvery('REFETCH_AUTH', function* ({ payload }) {
    try {
      console.log('[REFETCH_AUTH][SAGA]: CHECK PAYLOAD', payload);

      yield put({
        type: actions.REFETCHING_AUTH,
      });


      const apiResponse = yield refetchAuthApi();
      console.log('[REFETCH_AUTH][SAGA]: CHECK API RESPONSE', apiResponse);

      if (apiResponse.status === 200) {
        
        yield put({
          type: actions.LOG_IN_SUCCESS,
          token: apiResponse.data.token,
          loginSuccess: true,
          loginData: apiResponse.data.data.data
        })
      } else {
        yield put({
          type: actions.LOG_IN_FAILED,
          loginSuccess: false
        })
      }

      
    } catch (e) {
      console.log('[LOG_IN][SAGA]: INTERNAL ERROR', e);
      yield put({
        type: actions.LOG_IN_ERROR,
        error: 'Login Error',
        loginSuccess: false
      });
    }
  })  
}

export function* loginSuccess() {
  yield takeEvery(actions.LOG_IN_SUCCESS, function* (payload ) {
    yield localStorage.setItem('idToken', payload.token);
    yield localStorage.setItem('pubKey', payload.pubKey);
  })
}

export function* logout() {
  yield takeEvery(actions.LOG_OUT, function* ({payload}) {
    console.log('[LOG_OUT][SAGA]: CHECK PAYLOAD', payload);

    yield clearToken();

    yield call(logoutApi, payload);
    yield put({
      type: actions.LOG_OUT_SUCCESS,
    })
    
  });
}

function getPublicKey(payload) {
  return post(`/api/users/get/key`, payload);
}

function loginRequest(payload) {
  return post(`/api/users/login`, payload);
}

function logoutApi(payload) {
  return post(`/api/users/logout`, payload);
}

function refetchAuthApi() {
  return fetchWithForbidden(`/api/users/refetch`, {
    headers: {
      ...headers,
      token: localStorage.getItem('idToken')
    },
    method: 'GET'
  });
}

export default function* rootSaga() {
  yield all([
    fork(login),
    fork(loginSuccess),
    fork(logout),
    fork(refetchAuth)
  ])
}

