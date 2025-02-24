import actions from './actions'

const initialState = {
  idToken: null,
  kickedOut: false,
  loginErrorMessage: null,
  loginSuccess: false,
  isLoggingIn: false,
  loginData: null,
  modules: []
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGGING_IN:
      return {
        ...state,
        isLoggingIn: true
      }
    case actions.LOG_IN_SUCCESS:
      return {
        ...state,
        idToken: action.token,
        pubKey: action.pubKey,
        loginSuccess: action.loginSuccess,
        isLoggingIn: false,
        loginData: action.loginData,
        modules: action.loginData.role_details
      };
      case actions.LOG_IN_FAILED:
        return {
          ...state,
          loginErrorMessage: action.error,
          loginSuccess: action.loginSuccess,
          isLoggingIn: false
        };
      case actions.LOG_IN_ERROR:
        return {
          ...state,
          kickedOut: false,
          loginErrorMessage: action.error,
          loginSuccess: action.loginSuccess,
          isLoggingIn: false
        };
      case actions.LOG_OUT_SUCCESS:
      return {
        ...state,
        kickedOut: true,
        loginSuccess: false,
        loginErrorMessage: null 
      };
    default:
      return state
  }
}
