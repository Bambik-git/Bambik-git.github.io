import {get_profile} from "../API/API";

let initial_state = {
    postsData: [
        {id:1, post_text:'My first post', likes: 4},
        {id:2, post_text:'My second post', likes: 10},
        {id:3, post_text:'My third post', likes: 25},
    ],
    NewPostText: '',
    profile: null
}

export const profileReducer = (state=initial_state, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                post_text: state.NewPostText,
                likes: 0,
            }

            // state_copy.postsData = [...state.postsData];
            // state_copy.postsData.push(newPost);
            // state_copy.NewPostText = '';
            return {
                ...state,
                NewPostText: '',
                postsData: [...state.postsData, newPost]
            };

        case UPDATE_NEW_POST_TEXT:
            // state_copy.NewPostText = action.text;
            return {...state, NewPostText: action.text};

        case SET_USER_PROFILE:
            debugger;
            return {...state, profile: action.profile};

        default:
            console.log('Updated. Nothing changed!')
            return {...state};
    }

}

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const add_post = () => {
    return { type: ADD_POST }
}
export const update_new_post = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, text }
}
export const set_user_profile = (profile) => {
    return { type: SET_USER_PROFILE, profile }
}


export const getUsersProfileThunk = (user_id) => (dispatch) => {
    get_profile(user_id).then(data => {
        dispatch(set_user_profile(data));
    })
}