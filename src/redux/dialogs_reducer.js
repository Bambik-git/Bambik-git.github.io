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
    debugger;
    switch (action.type) {

        case 'UPDATE_NEW_MESSAGE_TEXT':
            state.NewMessageText = action.newMessage;
            return state;

        case 'SEND_MESSAGE':
            debugger;
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