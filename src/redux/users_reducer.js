import {get_users_API, follow_API} from "../API/API";

let initial_state = {
    users_data: [],
    page_size: 100,
    total_users_count: 100,
    current_page: 1,
    is_fetching: true,
    follow_is_fetching: []
}

let updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
   return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}
export const usersReducer = (state = initial_state, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users_data: updateObjectInArray(state.users_data, action.user_id, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users_data: updateObjectInArray(state.users_data, action.user_id, 'id', {followed: false})
            }
        case SET_USERS:
            debugger;
            return {...state, users_data: [...action.users]}

        case SET_CURRENT_PAGE:
            return {...state, current_page: action.current_page}

        case TOGGLE_IS_FETCHING:
            return {...state, is_fetching: action.is_fetching}

        case FOLLOW_TOGGLE_IS_FETCHING:
            debugger;
            return {
                ...state,
                follow_is_fetching: action.is_fetching
                    ? [...state.follow_is_fetching, action.user_id]
                    : state.follow_is_fetching.filter(id => id !== action.user_id)
            }

        case SET_TOTAL_USERS_COUNT:
            return {...state, total_users_count: action.total_users_count}

        default:
            return state;
    }
}


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOW_TOGGLE_IS_FETCHING = 'FOLLOW_TOGGLE_IS_FETCHING';

export const follow = (user_id) => {
    return {type: FOLLOW, user_id}
}
export const unfollow = (user_id) => {
    return {type: UNFOLLOW, user_id}
}
export const set_users = (users) => {
    return {type: SET_USERS, users}
}
export const set_current_page = (current_page) => {
    return {type: SET_CURRENT_PAGE, current_page}
}
export const set_total_users_count = (total_users_count) => {
    return {type: SET_TOTAL_USERS_COUNT, total_users_count}
}
export const toggle_is_fetching = (is_fetching) => {
    return {type: TOGGLE_IS_FETCHING, is_fetching}
}
export const follow_toggle_is_fetching = (is_fetching, user_id) => {
    return {type: FOLLOW_TOGGLE_IS_FETCHING, is_fetching, user_id}
}



//делает асинхронную работу и диспачит функции
export const getUsersThunkCreator = (current_page, page_size) => {
    return async (dispatch) => {
        dispatch(toggle_is_fetching(true));
        dispatch(set_current_page(current_page));

        let data = await get_users_API(current_page, page_size)
        dispatch(set_users(data.items));
        dispatch(set_total_users_count(data.totalCount));
        dispatch(toggle_is_fetching(false));
    }
}

export const followingThunkCreator = (user_id, method) => {
    return async (dispatch) => {

        dispatch(follow_toggle_is_fetching(true, user_id));
        let data = await follow_API(user_id, method)
        if (data.resultCode === 0) {
            switch (method) {
                case 'follow':
                    dispatch(follow(user_id));
                    break;
                case 'unfollow':
                    dispatch(unfollow(user_id));
                    break;
            }
        }
        dispatch(follow_toggle_is_fetching(false, user_id));
    }
}
