import React from "react";
import user_NoLogo_photo from "../../assets/no_logo.svg";
import {Link} from "react-router-dom";
import './Users.css'

let User = ({user, followingThunkCreator, follow_is_fetching}) => {
    /**
     * @param {array} follow_is_fetching - массив в который записывается id пользователя на которого подписался владелец
     * В массив добавляется id этого пользователя и хранится до тех пор пока с сервера не придет ответ об успешной
     * подписке/отписке. Данный массив позволяет заблокировать кнопку во время выполнения API запроса.
     * Кнопка блокируется для конкретного id, а не для всех путем добавления id в массив.
     * @param {function} followingThunkCreator - функция подписки/отписки
     * @param {array} user - массив данных об пользователях сервиса для отображения на странице
     */
    return (
        <div className="user_item_card">
            <Link to={`/profile/${user.id}`}>
                <img className="user_item_img" src={user.photos.small != null ? user.photos.small : user_NoLogo_photo}
                     alt={'avatar'}/>
                <span className="user_name">{user.name}</span>
            </Link>

            {/*Блок подписки на определнных пользователей*/}
            <div>
            {
                    user.followed
                        ?
                        <button type="button" className="default_btn"
                                disabled={follow_is_fetching.some(id => id === user.id)} onClick={() => {
                            followingThunkCreator(user.id, 'unfollow')
                        }}>Unfollow</button>
                        :
                        <button type="button" className="default_btn"
                                disabled={follow_is_fetching.some(id => id === user.id)} onClick={() => {
                            followingThunkCreator(user.id, 'follow')
                        }}>Follow</button>
                }
            </div>
        </div>)
}

export default User;