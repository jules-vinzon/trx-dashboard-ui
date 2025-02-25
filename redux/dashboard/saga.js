import { all, takeEvery, fork, put } from 'redux-saga/effects'
import { get } from 'helpers/resApiRequestor.js';
import actions from './actions';


export function* fetchTrx() {
    yield takeEvery('FETCH_TRANSACTIONS', function* (payload) {
        try {
            console.log('[FETCH_TRANSACTIONS][SAGA]: CHECK PAYLOAD', payload.payload);

            yield put({
                type: actions.FETCHING_PERMITS
            });

            const apiResponse = yield fetchPermitsApi(payload.payload)
            console.log('[FETCH_TRANSACTIONS][SAGA]: CHECK API RESPONSE', apiResponse);

            if (apiResponse.status === 200) {
                yield put({
                    type: actions.FETCH_TRANSACTIONS_SUCCESS,
                    fetchTrxSuccess: true,
                    fetchedTrxData: apiResponse.data.data,
                    
                })
            } else {
                yield put({
                    type: actions.FETCH_TRANSACTIONS_FAILED,
                    errorMessage: apiResponse.response.data.message,
                    fetchTrxSuccess: false
                })
            }


        } catch (e) {
            console.log('[FETCH_TRANSACTIONS][SAGA]: INTERNAL ERROR', e);
            yield put({
                type: actions.FETCH_TRANSACTIONS_FAILED,
                errorMessage: 'Failed to Fetch Permits',
                fetchTrxSuccess: false
              });
        }
    })
}


// API REQUESTS
function fetchPermitsApi(id) {
    return get(`/api/transactions/fetch/${id}`);
}

export default function* rootSaga() {
    yield all([
      fork(fetchTrx)
    ])
  }