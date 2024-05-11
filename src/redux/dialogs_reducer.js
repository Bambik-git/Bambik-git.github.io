let initial_state = {
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
export const dialogsReducer = (state=initial_state, action) => {
    let state_copy;

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT:
            state_copy = {
                ...state,
            NewMessageText: action.newMessage //state_copy.NewMessageText = action.newMessage;
            };

            return state_copy;

        case SEND_MESSAGE:
            debugger;
            let Message = {
                id: 4,
                message: state.NewMessageText
            }
            state_copy = {
                ...state,
                NewMessageText: '', //state_copy.NewMessageText = '';
                messagesData: [...state.messagesData, Message] //state_copy.messagesData.push(Message);
            };

            return state_copy;

        default:
            return state;
    }
}


const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';


export const update_new_message_text_ActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT,  newMessage: text }
}

export const send_message_ActionCreator = () => {
    return { type: SEND_MESSAGE }
}