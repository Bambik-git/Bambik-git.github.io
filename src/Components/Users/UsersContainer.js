
import {connect} from "react-redux";
import {follow_ActionCreator, set_users_ActionCreator, unfollow_ActionCreator} from "../../redux/users_reducer";
import Users from './Users'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users_data
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (user_id) => {
            dispatch(follow_ActionCreator(user_id))
        },
        unfollow: (user_id) => {
            dispatch(unfollow_ActionCreator(user_id))
        },
        set_users: (users) => {
            dispatch(set_users_ActionCreator(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);