import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {

    return (
        <div>
            <Paginator current_page={props.current_page}
                       total_users_count={props.total_users_count}
                       page_size={props.page_size}
                       on_page_changed={props.on_page_changed}/>
            {props.users.map(user => <User user={user}
                                          key={user.id}
                                          follow_is_fetching={props.follow_is_fetching}
                                          followingThunkCreator={props.followingThunkCreator} />)}
        </div>)
}

export default Users;