import { FETCH_POSTS, NEW_POST, TEST_FUNCTION, LAST_YEAR_SNAPS, GAME_SUMMARY } from '../actions/types'

const initialState = {
    items: [],
    item: {},
    lySnaps: [],
    lyCustomizedSnaps: [],
    gameInfo: []
}
export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            console.log('reducers')
            return {
                ...state,
                items: action.payload
            };
            case NEW_POST: 
            return {
                ...state,
                item: action.payload
            };
            case TEST_FUNCTION:
                console.log('test')
                return {
                    ...state
                }
            case LAST_YEAR_SNAPS:
                return {
                    ...state,
                    lySnaps: action.payload,
                    lyCustomizedSnaps: action.payload,
                }
            case GAME_SUMMARY:
                return {
                    ...state,
                    gameInfo: action.payload
                }
        default:
            return state;
    }
}