let state = {
    profilePage: {
        postsData: [
            {id:1, post_text:'My first post', likes: 4},
            {id:2, post_text:'My second post', likes: 10},
            {id:3, post_text:'My third post', likes: 25},
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Андрей'},
            {id: 2, name: 'Ваня'},
            {id: 3, name: 'Света'},
            {id: 4, name: 'Алина'},
            {id: 5, name: 'Евгений'},
        ],

        messagesData: [
            {id: 1, message:'Yo'},
            {id: 2, message:'Hi!'},
            {id: 3, message:'How are you?'}
        ]
    }
}

export default state;