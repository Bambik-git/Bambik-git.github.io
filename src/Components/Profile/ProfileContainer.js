import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {
    add_post,
    getStatusThunk,
    getUsersProfileThunk,
    update_new_post,
    updateStatusThunk
} from "../../redux/profile_reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.auth_user_id;
            // userId = 31100;
            // return redirect("/login")
        }

        this.props.getUsersProfileThunk(userId)
        this.props.getStatusThunk(userId)

    }

    render() {
        return (
        <div>
            <Profile {...this.props}
                     profile ={this.props.profile}
                     updateStatus={this.props.updateStatusThunk}/>
        </div>
        )
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

// export default connect(mapStateToProps, {
//     getUsersProfileThunk,
//     add_post,
//     update_new_post,
// })(withRouter(AuthRedirectComponent));

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    auth_user_id: state.auth.userId,
    is_auth: state.auth.is_auth,
})

export default compose(
    connect(mapStateToProps, {
        getUsersProfileThunk,
        add_post,
        update_new_post,
        getStatusThunk,
        updateStatusThunk
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);