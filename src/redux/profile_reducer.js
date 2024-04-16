let initial_state = {
    postsData: [
        {id:1, post_text:'My first post', likes: 4},
        {id:2, post_text:'My second post', likes: 10},
        {id:3, post_text:'My third post', likes: 25},
    ],
    NewPostText: ''}

export const profileReducer = (state=initial_state, action) => {
    debugger;
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