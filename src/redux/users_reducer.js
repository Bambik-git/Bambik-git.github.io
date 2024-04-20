let initial_state = {
    users_data: [
        // {
        //     id: 1,
        //     photoUrl: 'https://cdn4.iconfinder.com/data/icons/rcons-user/32/teacher_man_professor-1024.png',
        //     followed: true,
        //     full_name: 'Андрей',
        //     status: 'I am a boss',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://yt3.googleusercontent.com/ytc/AGIKgqOHCTkejlph3FozMpeSJwfV3VMbb2PlVI4cHSiyEA=s900-c-k-c0x00ffffff-no-rj',
        //     followed: true,
        //     full_name: 'Сережа',
        //     status: 'I am here!',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://yt3.ggpht.com/a/AATXAJxE2eBzqjMnlZA0LEHgaDaTQIfLLlKaXqzuKw=s900-c-k-c0xffffffff-no-rj-mo',
        //     followed: false,
        //     full_name: 'Ваня',
        //     status: 'Hello!',
        //     location: {city: 'Kiev', country: 'Ukraine'}
        // },
    ],
}
export const usersReducer = (state=initial_state, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users_data: state.users_data.map(u => {
                    if (u.id === action.user_id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users_data: state.users_data.map(u => {
                    if (u.id === action.user_id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users_data: [...state.users_data, ...action.users]}


        default:
            console.log('Updated. Nothing changed!')
            return state;
    }
}


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export const follow_ActionCreator = (user_id) => {
    return { type: FOLLOW, user_id: user_id }
}
export const unfollow_ActionCreator = (user_id) => {
    return { type: UNFOLLOW, user_id: user_id }
}
export const set_users_ActionCreator = (users) => {
    return { type: SET_USERS, users: users }
}