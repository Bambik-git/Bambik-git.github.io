import './MyPosts.css'
import {connect} from "react-redux";
import {add_post, clear_post, update_new_post} from "../../../redux/profile_reducer";
import React, {useState} from "react";
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";

let MyPostsContainer =  ({profileData, add_post, clear_post, update_new_post, profile}) => {
    console.log('MyPostsContainer')

    //Текст ошибки ввода поста
    const [error_post, setError_post] = useState(null)

    let on_add_post = () => {
        if (profileData.NewPostText === '') {
            setError_post('Поле не может быть пустым')
        } else {
            add_post()
            setError_post(null)
        }
    }

    return (
        <div>
            <CreatePost error_post={error_post}
                        profile={profile}
                        profileData={profileData}
                        update_new_post={update_new_post}
                        on_add_post={on_add_post}
                        clear_post={clear_post}  />
            {/*Создание массива компонент для отображения каждого поста*/}
            {[...profileData.postsData]
                .reverse()
                .map(posts => <Post key={posts.id}
                                    message={posts.post_text}
                                    likes={posts.likes}
                                    profile={profile} />)}
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        profileData: state.profilePage
    }
}

export default connect(mapStateToProps, {
    clear_post,
    add_post,
    update_new_post,
})(MyPostsContainer);
