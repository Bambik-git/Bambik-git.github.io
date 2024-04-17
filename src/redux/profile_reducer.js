let initial_state = {
    postsData: [
        {id:1, post_text:'My first post', likes: 4},
        {id:2, post_text:'My second post', likes: 10},
        {id:3, post_text:'My third post', likes: 25},
    ],
    NewPostText: ''}

export const profileReducer = (state=initial_state, action) => {
    let state_copy = {...state};

    switch (action.type) {

        case 'ADD_POST':
            let newPost = {
                id: 5,
                post_text: state.NewPostText,
                likes: 0,
            }
            state_copy.postsData = [...state.postsData];
            state_copy.postsData.push(newPost);
            state_copy.NewPostText = '';
            // state.postsData.push(newPost);
            // state.NewPostText = '';
            return state_copy;

        case 'UPDATE_NEW_POST_TEXT':
            state_copy.NewPostText = action.newText;
            return state_copy;

        default:
            console.log('Updated. Nothing changed!')
            return state_copy;
    }

}