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
                ...state, ...action.data, isAuth: true
            }

        default:
            console.log('Updated. Nothing changed!')
            return state;
    }
}


export const set_user_data = ({ userId, login, email }) => { return { type: SET_USER_DATA, data: { userId, login, email } } }