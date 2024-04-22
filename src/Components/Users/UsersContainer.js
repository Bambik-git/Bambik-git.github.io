
import {connect} from "react-redux";
import {
    follow_ActionCreator,
    set_current_page_ActionCreator, set_total_users_count_ActionCreator,
    set_users_ActionCreator, toggle_is_fetching_ActionCreator,
    unfollow_ActionCreator
} from "../../redux/users_reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/preloader";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.instance = axios.create({
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0',
        })
    }

    componentDidMount() {
        this.props.toggle_is_fetching(true);
        this.instance.get(`/users?page=${this.props.current_page}&count=${this.props.page_size}`).then(response => {
            this.props.set_users(response.data.items);
            this.props.set_total_users_count(response.data.totalCount);
            this.props.toggle_is_fetching(false);
        });

    }

    on_page_changed = (page_number) => {
        this.props.toggle_is_fetching(true);
        this.props.set_current_page(page_number)
        this.instance.get(`/users?page=${page_number}&count=${this.props.page_size}`).then(response => {
            this.props.set_users(response.data.items);
            this.props.toggle_is_fetching(false);
        });
    }

    render() {
        return <>
            {this.props.is_fetching ? <Preloader /> :
            <Users total_users_count ={this.props.total_users_count}
                      page_size={this.props.page_size}
                      current_page={this.props.current_page}
                      on_page_changed={this.on_page_changed}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>
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
        is_fetching: state.usersPage.is_fetching,
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
        },
        set_current_page: (current_page) => {
            dispatch(set_current_page_ActionCreator(current_page))
        },
        set_total_users_count: (total_users_count) => {
            dispatch(set_total_users_count_ActionCreator(total_users_count))
        },
        toggle_is_fetching: (is_fetching) => {
            dispatch(toggle_is_fetching_ActionCreator(is_fetching))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);