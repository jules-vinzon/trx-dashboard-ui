import actions from './actions'; 

const initialState = {
    fetchTrxSuccess: false,
    fetchedTrxData: null,
    errorMessage: null,
    isFetchingTrx: false,
}

export default function dashboardReducer(state = initialState, action) {

    switch (action.type) {

        // FETCHING OF DASHBOARD DATA
        case actions.FETCHING_PERMITS:
            return {
                ...state,
                isFetchingTrx: true,
                filteredParams: action.filteredParams
            }
        case actions.FETCH_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                fetchTrxSuccess: action.fetchTrxSuccess,
                isFetchingTrx: false,
                fetchedTrxData: action.fetchedTrxData
            }
        case actions.FETCH_TRANSACTIONS_FAILED:
            return {
                ...state,
                errorMessage: action.errorMessage,
                fetchTrxSuccess: action.fetchTrxSuccess,
                isFetchingTrx: false
            };
        case actions.UPDATE_FETCHED_TRANSACTIONS_DATA:
            const newTransaction = action.payload;
            const isDuplicate = state.fetchedTrxData.some(
                (item) => item.request_id === newTransaction.request_id
            );

            if (isDuplicate) {
                return state; 
            }

            return {
                ...state,
                fetchedTrxData: [newTransaction, ...state.fetchedTrxData]
            };

        default: return state
    }

}