import {auth_API, login, logout} from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA';

let initial_state = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,

}
export const authReducer = (state=initial_state, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data
            }

        default:
            console.log('Updated. Nothing changed!')
            return state;
    }
}


export const set_user_data = (userId, login, email, isAuth) => { return { type: SET_USER_DATA, data: { userId, login, email, isAuth } } }

export const getAuthUserData = () => (dispatch) => {
    auth_API().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(set_user_data(id, login, email, true));
        }
    });
}

export const loginTC = (email, password, rememberMe, setStatus) => (dispatch) => {
    login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let error_msg = response.data.messages[0]
            debugger;
            setStatus({errors: error_msg})
        }
    });
}

export const logoutTC = () => (dispatch) => {
    logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(set_user_data(null, null, null, false))
        }
    });
}