import React from "react";
import userNoLogo from "../../../../assets/no_logo.svg";
import './Post.css'

const Post = React.memo(({profile, message }) => {
    console.log('CreatePost')
    return (
        <div className="block">
            <div className="section_post">
                <div className="section_post__user_img">
                    {profile ?
                        <img alt={'Profile_logo'} src={profile.photos.small || userNoLogo}/>
                        : null
                    }
                </div>
                <div className="section_post_item">{message}</div>
            </div>
        </div>
)
})

export default Post;