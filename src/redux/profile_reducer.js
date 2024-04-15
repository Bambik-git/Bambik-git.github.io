export const profileReducer = (state, action) => {
    switch (action.type) {

        case 'ADD_POST':
            let newPost = {
                id: 5,
                post_text: state.NewPostText,
                likes: 0,
            }
            state.postsData.push(newPost);
            state.NewPostText = '';
            return state;

        case 'UPDATE_NEW_POST_TEXT':
            state.NewPostText = action.newText;
            return state;

        default:
            console.log('Updated. Nothing changed!')
            return state;
    }

}