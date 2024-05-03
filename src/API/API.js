import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': '34f0d779-a61f-4db4-bd78-26a75ab1e0bf',
    }
})

export let get_users_API = (page_number, page_size) => {
    return instance.get(`/users?page=${page_number}&count=${page_size}`).then(response => {
        return response.data
    })
}

export let follow_API = (user_id, action) => {
    if (action === 'follow') {
        return instance.post(`/follow/${user_id}`).then(response => {
            return response.data
        })
    } else if (action === 'unfollow') {
    return instance.delete(`/follow/${user_id}`).then(response => {
        return response.data
    })
}
}

export let get_profile= (userId) =>{
    return instance.get(`/profile/${userId}`).then(response => {
        return response.data
    });
}

export let auth_API = () => {
    return instance.get(`/auth/me`).then(response => {
        return response.data
    })
}

export let getStatus = (user_id) =>{
    return instance.get(`/profile/status/${user_id}`);
}

export let updateStatus = (status) =>{
    return instance.put('/profile/status', {status});
}

export let login = (email, password, rememberMe = false) =>{
    return instance.post('/auth/login', {email, password, rememberMe});
}
export let logout = () =>{
    return instance.delete('/auth/login', );
}