import {profileReducer} from "./profile_reducer.js";
import {dialogsReducer} from "./dialogs_reducer.js";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id:1, post_text:'My first post', likes: 4},
                {id:2, post_text:'My second post', likes: 10},
                {id:3, post_text:'My third post', likes: 25},
            ],
            NewPostText: 'new post text'
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Андрей'},
                {id: 2, name: 'Ваня'},
                {id: 3, name: 'Света'},
                {id: 4, name: 'Алина'},
                {id: 5, name: 'Евгений'},
            ],

            messagesData: [
                {id: 1, message:'Yo'},
                {id: 2, message:'Hi!'},
                {id: 3, message:'How are you?'}
            ],
            NewMessageText: '',
        }
    },

    _callSubscriber () {
    },

    getState() {
        return this._state
    },

    // _addPost(){
    //     let newPost = {
    //         id: 5,
    //         post_text: this._state.profilePage.NewPostText,
    //         likes: 0,
    //     }
    //     this._state.profilePage.postsData.push(newPost);
    //     this._state.profilePage.NewPostText = '';
    //     this._callSubscriber(this._state);
    // },

    // UpdateNewPostText(newText) {
    //     this._state.profilePage.NewPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // dispatch(action) {
    //     switch (action.type) {
    //         case 'ADD_POST':
    //             this._addPost();
    //             break;
    //
    //         case 'UPDATE_NEW_POST_TEXT':
    //             // this.UpdateNewPostText(action.newText)
    //             this._state.profilePage.NewPostText = action.newText;
    //             this._callSubscriber(this._state);
    //             break;
    //
    //         case 'UPDATE_NEW_MESSAGE_TEXT':
    //             this._state.dialogsPage.NewMessageText = action.newMessage;
    //             this._callSubscriber(this._state);
    //             break;
    //
    //         case 'SEND_MESSAGE':
    //             let Message = {
    //                 id: 4,
    //                 message: this._state.dialogsPage.NewMessageText
    //             }
    //             this._state.dialogsPage.messagesData.push(Message);
    //             this._state.dialogsPage.NewMessageText = '';
    //             this._callSubscriber(this._state);
    //             break;
    //
    //         default:
    //             this._callSubscriber(this._state);
    //             console.log('Page updated. Nothing changed!')
    //             break;
    //     }
    // }

    dispatch(action) {
    debugger;
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const update_new_message_text_ActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT,  newMessage: text }
}

export const send_message_ActionCreator = () => {
    return { type: SEND_MESSAGE }
}

export const add_post_ActionCreator = () => {
    return { type: ADD_POST }
}
export const update_new_post_text_ActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}



export default store;