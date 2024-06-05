import cn from "classnames";
import userNoLogo from "../../../../assets/no_logo.svg";
import React from "react";
import './CreatePost.css'

let CreatePost = ({error_post, profile, profileData, update_new_post, on_add_post, clear_post}) => {
    // Создание ссылки и привязка к тегу textarea
    let newPostElement = React.createRef()

    return (
        <div className={cn({
            'block': true,
            'post_error': error_post !== null,
        })}>
            <div className="section_post__user_img">
                {profile ?
                    <img alt={'Profile_logo'} src={profile.photos.small || userNoLogo}/>
                    : null
                }
            </div>
            <textarea name="new_post"
                      wrap="hard"
                      id="new_post"
                      className="send_post"
                      placeholder="Что у вас нового?"
                      ref={newPostElement}
                      value={profileData.NewPostText}
                      onChange={(e) => update_new_post(e.target.value)}/>
            <div className='post_error_message'><span>{error_post}</span></div>
            <div className="post_button_align">
                <button className="default_btn" onClick={() => clear_post()}>Очистить</button>
                <button className="default_btn" onClick={on_add_post}>Опубликовать</button>
            </div>
        </div>
    )
}
export default CreatePost;