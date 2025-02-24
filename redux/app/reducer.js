import actions, { getView } from './actions';

const isServer = true;
const initialState = {
    view: !isServer && getView(window.innerWidth),
}

export default function appReducer(state = initialState, action) {

    switch (action.type) {

        case actions.TOGGLE_ALL:
            if (state.view !== action.view || action.height !== state.height) {
                const height = action.height ? action.height : state.height;
                return {
                ...state,
                view: action.view,
                height,
                };
            }
            break;

        default:
            return state
    }
    return state;

}