import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {add_post, getUsersProfileThunk, update_new_post} from "../../redux/profile_reducer";
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUsersProfileThunk(userId)

    }

    render() {
        return (
        <div>
            <Profile {...this.props} profile ={this.props.profile}/>
        </div>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

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

export default connect(mapStateToProps, {
    getUsersProfileThunk,
    add_post,
    update_new_post,
})(withRouter(AuthRedirectComponent));