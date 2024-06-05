import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import './Users.css'

let Users = ({
                 total_users_count, page_size, current_page, users, follow_is_fetching, followingThunkCreator,
                 getUsersThunkCreator, on_select_page_size
             }) => {

    return (
        <div className="block">
            <div className="section_users">
                <div className="section_title">
                    <h2>Пользователи</h2>
                    {/*Выбор количества пользователей отображаемых на странице*/}
                    <select onChange={on_select_page_size} name="page_size" id="page_size_select" value={page_size}>
                        <option value="5">Кол-во пользователей</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>

                    </select>
                </div>
                <Paginator current_page={current_page}
                           total_users_count={total_users_count}
                           page_size={page_size}
                           getUsersThunkCreator={getUsersThunkCreator}/>
                <div className="users_cards">
                    {users.map(user => <User user={user}
                                                   key={user.id}
                                                   follow_is_fetching={follow_is_fetching}
                                                   followingThunkCreator={followingThunkCreator}/>)}
                </div>
            </div>
        </div>)
}

export default Users;