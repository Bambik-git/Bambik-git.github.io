import React from "react";
import Profile from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {add_post, set_user_profile, update_new_post} from "../../redux/profile_reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.instance = axios.create({
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0',
        })
    }

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        debugger;
        this.instance.get(`/profile/${userId}`).then(response => {
            this.props.set_user_profile(response.data);
        });

    }

    render() {
        return (
        <div>
            <Profile {...this.props} profile ={this.props.profile}/>
        </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
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
    set_user_profile,
    add_post,
    update_new_post,
})(withRouter(ProfileContainer));