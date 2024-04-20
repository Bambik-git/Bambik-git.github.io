import React from "react";
import user_NoLogo_photo from '../../assets/man-user.svg'
import axios from "axios";

let Users = (props) => {
    let get_users = () => {
        const instance = axios.create({
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0',
        })

        if (props.users.length === 0) {
            instance.get('/users').then(response => {
                props.set_users(response.data.items);
            });
        }
    }

    return (
        <div>
            <button onClick={get_users}>Получить пользователей</button>
            {props.users.map(user =>
                <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : user_NoLogo_photo} alt={'avatar'} width={'70'} height={'70'}/>
                    </div>
                    <div>
                        {
                            user.followed
                            ? <button onClick={() => { props.unfollow(user.id) } }>Unfollow</button>
                            : <button onClick={() => { props.follow(user.id) } }>Follow</button>
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