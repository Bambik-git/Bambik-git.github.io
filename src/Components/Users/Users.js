import React from "react";
import style from "./Users.module.css";
import user_NoLogo_photo from "../../assets/man-user.svg";
import {Link} from "react-router-dom";

let Users = (props) => {

    let pages_count = Math.ceil(props.total_users_count / props.page_size);
    let pages = [];
    for (let i=1; i < pages_count+1; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={'pagination'}>
                {pages.map(p => <span className={props.current_page === p && style.selectedPage}
                                      onClick={() => {
                                          props.on_page_changed(p)
                                      }}>{p}</span>)}

            </div>
            {props.users.map(user =>
                <div key={user.id}>
                <span>
                    <div>
                        <Link to={`/profile/${user.id}`}>
                        <img src={user.photos.small != null ? user.photos.small : user_NoLogo_photo} alt={'avatar'}
                             width={'70'} height={'70'}/>
                        </Link>
                    </div>
                    <div>
                        {
                            user.followed
                                ? <button onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(user.id)
                                }}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
                </div>)}
        </div>)
}

export default Users;