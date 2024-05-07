export const getPageSize = (state) => {
    return state.usersPage.page_size
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.total_users_count
}
export const getCurrentPage = (state) => {
    return state.usersPage.current_page
}
export const getIsFetchingFollow = (state) => {
    return state.usersPage.follow_is_fetching
}
export const getIsFetching = (state) => {
    return state.usersPage.is_fetching
}
