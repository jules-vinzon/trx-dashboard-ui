const actions = {

    // FETCHING OF DASHBOARD DATA
    FETCH_TRANSACTIONS: 'FETCH_TRANSACTIONS',
    FETCHING_PERMITS: 'FETCHING_PERMITS',
    FETCH_TRANSACTIONS_SUCCESS: 'FETCH_TRANSACTIONS_SUCCESS',
    FETCH_TRANSACTIONS_FAILED: 'FETCH_TRANSACTIONS_FAILED',

    UPDATE_FETCHED_TRANSACTIONS_DATA: 'UPDATE_FETCHED_TRANSACTIONS_DATA',

    fetchTrx: (payload) => ({
        type: actions.FETCH_TRANSACTIONS,
        payload
    }),

    updateFetchedTrxData: (payload) => ({
        type: actions.UPDATE_FETCHED_TRANSACTIONS_DATA,
        payload
    }),

}

export default actions;
