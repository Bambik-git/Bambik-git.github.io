
import {add_post_ActionCreator, update_new_post_text_ActionCreator} from "../../../redux/redux_store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


//Компонента обертка для другой компоненты. Компонента овтечает за данные и логику.
// const  MyPostsContrainer = (props) => {
//     debugger;
//     const onAddPost =() => {
//         props.store.dispatch(add_post_ActionCreator());
//     }
//
//     let onPostChange = (text) => {
//         props.store.dispatch(update_new_post_text_ActionCreator(text));
//     }
//
//     return (
//         <MyPosts onPostChange={onPostChange}
//                  onAddPost={onAddPost}
//                  posts={props.store.getState().profilePage.postsData}
//                  NewPostText={props.store.getState().profilePage.NewPostText}/>
//     )
// }
let mapStateToProps = (state) => {
    return {
        profileData: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {
            dispatch(update_new_post_text_ActionCreator(text));
        },
        onAddPost: () => {
            dispatch(add_post_ActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
