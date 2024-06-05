import {send_message_ActionCreator, update_new_message_text_ActionCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


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


export default compose( connect(mapStateToProps, mapDispatchToProps), withAuthRedirect )(Dialogs);