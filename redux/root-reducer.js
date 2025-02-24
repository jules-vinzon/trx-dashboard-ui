import { combineReducers } from 'redux';
import Auth from './auth/reducer';
import Dashboard from './dashboard/reducer';
import App from './app/reducer';

export default combineReducers({
    Auth,
    Dashboard,
    App
});
