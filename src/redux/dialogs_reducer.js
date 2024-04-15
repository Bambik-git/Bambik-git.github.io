export const dialogsReducer = (state, action) => {
    switch (action.type) {

        case 'UPDATE_NEW_MESSAGE_TEXT':
            state.NewMessageText = action.newMessage;
            return state;

        case 'SEND_MESSAGE':
            let Message = {
                id: 4,
                message: state.NewMessageText
            }
            state.messagesData.push(Message);
            state.NewMessageText = '';
            return state;

        default:
            console.log('Updated. Nothing changed!')
            return state;
    }
}