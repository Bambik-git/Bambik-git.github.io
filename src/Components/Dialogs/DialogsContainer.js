import {send_message_ActionCreator, update_new_message_text_ActionCreator} from "../../redux/redux_store";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


// const DialogsContainer = (props) => {
//     let get_state = props.store.getState();
//     let onNewMessageChange = (text) => {
//         props.store.dispatch(update_new_message_text_ActionCreator(text))
//     }
//
//     let onSendMessage = () => {
//         props.store.dispatch(send_message_ActionCreator())
//     }
//
//     return (
//         <Dialogs onSendMessage={onSendMessage}
//                  onNewMessageChange={onNewMessageChange}
//                  dialogs={get_state.dialogsPage.dialogsData}
//                  message={get_state.dialogsPage.messagesData}
//                  newMessageText={get_state.dialogsPage.NewMessageText}/>
//     )
// }



let AuthRedirectComponent = withAuthRedirect(Dialogs)

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageChange: (text) => {
            dispatch(update_new_message_text_ActionCreator(text))
        },
        onSendMessage: () => {
            dispatch(send_message_ActionCreator())
        },
    }
}

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose( connect(mapStateToProps, mapDispatchToProps), withAuthRedirect )(Dialogs);