import React from "react";
import user_NoLogo_photo from "../../assets/man-user.svg";
import {Link} from "react-router-dom";

let User = ({user, followingThunkCreator, follow_is_fetching}) => {

    return (
        <div>
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
                                ?
                                <button disabled={follow_is_fetching.some(id => id === user.id)} onClick={() => {
                                    followingThunkCreator(user.id, 'unfollow')
                                }}>Unfollow</button>
                                :
                                <button disabled={follow_is_fetching.some(id => id === user.id)} onClick={() => {
                                    followingThunkCreator(user.id, 'follow')
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
        </div>)
}

export default User;