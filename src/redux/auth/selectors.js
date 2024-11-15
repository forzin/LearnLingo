export const selectUserData = state => state.auth.user
export const selectUserDataIsLoggedIn = state => state.auth.isLoggedIn
export const selectUserDataToken = state => state.auth.token
export const selectUserDataIsRefreshing = state => state.auth.isRefreshing