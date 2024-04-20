import React from "react";
import user_NoLogo_photo from '../../assets/man-user.svg'
import axios from "axios";

class Users extends React.Component {
    get_users = () => {
        const instance = axios.create({
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0',
        })

        if (this.props.users.length === 0) {
            instance.get('/users').then(response => {
                this.props.set_users(response.data.items);
            });
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.get_users}>Получить пользователей</button>
                {this.props.users.map(user =>
                    <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : user_NoLogo_photo} alt={'avatar'} width={'70'} height={'70'}/>
                    </div>
                    <div>
                        {
                            user.followed
                                ? <button onClick={() => { this.props.unfollow(user.id) } }>Unfollow</button>
                                : <button onClick={() => { this.props.follow(user.id) } }>Follow</button>
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

}

export default Users;