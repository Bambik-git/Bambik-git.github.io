import {get_profile, getStatus, login, savePhoto, saveProfile, updateStatus} from "../API/API";
import {getAuthUserData} from "./auth_reducer";

let initial_state = {
    postsData: [
        {id: 1, post_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                '                Alias architecto atque aut dolore earum eligendi exercitationem explicabo illo,\n' +
                '                iure molestiae molestias nam nulla odit optio porro praesentium quibusdam vero voluptas.', likes: 4},
        {id: 2, post_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                '                Alias architecto atque aut dolore earum eligendi exercitationem explicabo illo,\n' +
                '                iure molestiae molestias nam nulla odit optio porro praesentium quibusdam vero voluptas.', likes: 10},
        {id: 3, post_text: 'My third post', likes: 25},
    ],
    NewPostText: '',
    profile: null,
    status: '',
    error_post_message: null
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
        case CLEAR_POST:
            return {...state, NewPostText: ''}

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
const CLEAR_POST = 'CLEAR_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';

export const add_post = () => {
    return {type: ADD_POST}
}
export const clear_post = () => {
    return {type: CLEAR_POST}
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
    const data = await get_profile(user_id)
    dispatch(set_user_profile(data));
}

export const getStatusThunk = (user_id) => async (dispatch) => {
    const response = await getStatus(user_id)
    dispatch(set_status(response.data))
}

export const updateStatusThunk = (status) => async (dispatch) => {
    const response = await updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(set_status(status))
    }
}

export const savePhotoThunk = (file) => async (dispatch) => {
    const response = await savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(save_photo_success(response.data.data.photos))
    }
}

export const editProfile = (formData, setStatus) => async (dispatch, getState) => {
    const user_id = getState().auth.userId;
    console.log({...formData})
    const response = await saveProfile({...formData})
    if (response.data.resultCode === 0) {
        dispatch(getUsersProfileThunk(user_id));
    } else {
        let error_msg = response.data.messages[0]
        setStatus({errors: error_msg})
        throw new Error(error_msg)
    }
    debugger;
}