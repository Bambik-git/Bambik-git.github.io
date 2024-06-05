
import {connect} from "react-redux";
import {
    follow_toggle_is_fetching, followingThunkCreator,
    getUsersThunkCreator, select_page_size,
    set_current_page,
    set_total_users_count,
    set_users,
    toggle_is_fetching,
} from "../../redux/users_reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.current_page, this.props.page_size);
    }


    on_select_page_size = (e) => {
        /*
        Метод позволяет выбирать количество пользователей отображаемых на странице.
        Автоматически переключает пользователя на первую страницу.
        */
        this.props.select_page_size(e.target.value)
        this.props.getUsersThunkCreator(1, e.target.value)
    }

    componentWillUnmount() {
        this.props.set_current_page(1);
    }

    render() {
        return <>
            {this.props.is_fetching ? <Preloader/> :
                <Users total_users_count={this.props.total_users_count}
                       page_size={this.props.page_size}
                       current_page={this.props.current_page}
                       users={this.props.users}
                       follow_is_fetching={this.props.follow_is_fetching}

                       on_select_page_size={this.on_select_page_size}
                       followingThunkCreator={this.props.followingThunkCreator}
                       getUsersThunkCreator={this.props.getUsersThunkCreator}/>
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users_data,
        page_size: state.usersPage.page_size,
        total_users_count: state.usersPage.total_users_count,
        current_page: state.usersPage.current_page,
        follow_is_fetching: state.usersPage.follow_is_fetching,
        is_fetching: state.usersPage.is_fetching
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        set_users,
        set_current_page,
        set_total_users_count,
        toggle_is_fetching,
        follow_toggle_is_fetching,
        getUsersThunkCreator,
        followingThunkCreator,
        select_page_size
    })
)(UsersContainer);