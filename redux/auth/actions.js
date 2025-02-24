const actions = {
  
  // LOG IN
  LOG_IN: 'LOG_IN',
  LOGGING_IN: 'LOGGING_IN',
  LOG_IN_SUCCESS:'LOG_IN_SUCCESS',
  LOG_IN_FAILED: 'LOG_IN_FAILED',
  LOG_IN_ERROR: 'LOG_IN_ERROR',

   
  // REFETCH AUTH
  REFETCH_AUTH: 'REFETCH_AUTH',
  REFETCHING_AUTH: 'REFETCHING_AUTH',
  REFETCH_AUTH_SUCCESS:'REFETCH_AUTH_SUCCESS',
  REFETCH_AUTH_FAILED: 'REFETCH_AUTH_FAILED',

  //LOG OUT
  LOG_OUT: 'LOG_OUT',
  LOGGING_OUT: 'LOGGING_OUT',
  LOG_OUT_SUCCESS:'LOG_OUT_SUCCESS',
  LOG_OUT_FAILED: 'LOG_OUT_FAILED',
  LOG_OUT_ERROR: 'LOG_OUT_ERROR',
  
  login: (payload) => ({
    type: actions.LOG_IN,
    payload
  }),

  refetchAuth: () => ({
    type: actions.REFETCH_AUTH
  }),

  logout: (payload) => ({
    type: actions.LOG_OUT,
    payload: payload,
  }),

}

export default actions;
