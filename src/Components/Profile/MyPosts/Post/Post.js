import style from "./Post.module.css"
import React from "react";
const  Post = React.memo(props => {
    return (
        <div className={style.item}>
            <img src={'https://pixelbox.ru/wp-content/uploads/2023/12/avatar-youtube-pixelbox.ru-126.jpg'} alt={'avatar'}/><br/>
            {props.message}<br/>
            <span>Likes: {props.likes}</span><br/>
        </div>
    )
})

export default Post;