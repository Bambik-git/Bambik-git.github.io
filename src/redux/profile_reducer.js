import {get_profile, getStatus, savePhoto, updateStatus} from "../API/API";

let initial_state = {
    postsData: [
        {id: 1, post_text: 'My first post', likes: 4},
        {id: 2, post_text: 'My second post', likes: 10},
        {id: 3, post_text: 'My third post', likes: 25},
    ],
    NewPostText: '',
    profile: null,
    status: ''
}

export const profileReducer = (state = initial_state, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                post_text: state.NewPostText,
                likes: 0,
            }
            return {
                ...state,
                NewPostText: '',
                postsData: [...state.postsData, newPost]
            };

        case UPDATE_NEW_POST_TEXT:
            return {...state, NewPostText: action.text};

        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        case SET_STATUS:
            return {...state, status: action.status};

        case SAVE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos}};

        default:
            return {...state};
    }

}

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';

export const add_post = () => {
    return {type: ADD_POST}
}
export const update_new_post = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, text}
}
export const set_user_profile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}
export const set_status = (status) => {
    return {type: SET_STATUS, status}
}
export const save_photo_success = (photos) => {
    return {type: SAVE_PHOTO, photos}
}


export const getUsersProfileThunk = (user_id) => async (dispatch) => {
    let data = await get_profile(user_id)
    dispatch(set_user_profile(data));
}

export const getStatusThunk = (user_id) => async (dispatch) => {
    let response = await getStatus(user_id)
    dispatch(set_status(response.data))
}

export const updateStatusThunk = (status) => async (dispatch) => {
    let response = await updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(set_status(status))
    }
}

export const savePhotoThunk = (file) => async (dispatch) => {
    let response = await savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(save_photo_success(response.data.data.photos))
    }
}
