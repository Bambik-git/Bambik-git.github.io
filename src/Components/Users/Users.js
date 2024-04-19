import React from "react";


let Users = (props) => {
    // if (props.users.length === 3){
    //     props.set_users(
    //         [
    //             {
    //                 id: 5,
    //                 photoUrl: 'https://cdn4.iconfinder.com/data/icons/rcons-user/32/teacher_man_professor-1024.png',
    //                 followed: true,
    //                 full_name: 'Андрей',
    //                 status: 'I am a boss',
    //                 location: {city: 'Minsk', country: 'Belarus'}
    //             },
    //
    //         ]
    //     )
    // }


    return (
        <div>
            {props.users.map(user =>
                <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} alt={'avatar'} width={'70'} height={'70'}/>
                    </div>
                    <div>
                        {
                            user.followed
                            ? <button onClick={() => { props.unfollow(user.id) } }>Unfollow</button>
                            : <button onClick={() => { props.follow(user.id) } }>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{user.full_name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
                </div>)}
        </div>)
}

export default Users;