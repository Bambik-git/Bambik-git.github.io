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

export let follow_API = (user_id) => {
    return instance.post(`/follow/${user_id}`).then(response => {
        return response.data
    })
}

export let unfollow_API = (user_id) => {
    return instance.delete(`/follow/${user_id}`).then(response => {
        return response.data
    })
}