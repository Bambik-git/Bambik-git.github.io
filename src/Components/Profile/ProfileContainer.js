import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {
    editProfile,
    getStatusThunk,
    getUsersProfileThunk,
    savePhotoThunk,
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

    refreshProfile () {
        /*
        Функция для обновления страницы профиля
        userId - берется из текущего URL
         */
        let userId = this.props.router.params.userId;
        /*Если в URL пути не указан user_id профиля, значит переменная userId пустая. В этом случае загружается страница
        авторизованного пользователя*/
        if (!userId) {
            userId = this.props.auth_user_id;
        }

        this.props.getUsersProfileThunk(userId)
        this.props.getStatusThunk(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        /*
        Если userId в URL пути изменился, то загружается страница нового пользователя.
         */
        if (this.props.router.params.userId !== prevProps.router.params.userId){
            this.refreshProfile()
        }

    }

    render() {
        console.log('Profile Container')
        return (
        <div>
            <Profile {...this.props}
                     isOwner = {!this.props.router.params.userId}
                     profile ={this.props.profile}
                     updateStatus={this.props.updateStatusThunk}
                     savePhoto={this.props.savePhotoThunk}
                     editProfile={this.props.editProfile}/>
        </div>
        )
    }
}

function withRouter(Component) {
    /*
    HOC позволяет извлекать данные из URL запроса в частности userId
     */
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

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    auth_user_id: state.auth.userId,
    is_auth: state.auth.is_auth,
})

export default compose(
    connect(mapStateToProps, {
        getUsersProfileThunk,
        getStatusThunk,
        updateStatusThunk,
        savePhotoThunk,
        editProfile,
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);