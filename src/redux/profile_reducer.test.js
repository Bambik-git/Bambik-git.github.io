import {profileReducer} from "./profile_reducer";
import {add_post_ActionCreator} from "./store";

let state = {
    postsData: [
        {id:1, post_text:'My first post', likes: 4},
        {id:2, post_text:'My second post', likes: 10},
        {id:3, post_text:'My third post', likes: 25},
    ],
    NewPostText: '',
    profile: null,
    status: ''
}
test('length of post should be increment ', () => {
    let action = add_post_ActionCreator("hello!");

    let newState = profileReducer(state, action)

    // 3. Ожидание
    expect(newState.postsData.length).toBe(4);
});

