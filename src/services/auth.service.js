import { api, path } from "./";
import encryption from "../utils/encryption";
export const ACCESS_TOKEN_KEY = "token";
export const PROFILE_KEY = "profile";

const AuthService = {
    login(user) {
        return api
            .login(user, path.signin)
            .then((res) => {
                if (res && res.accessToken) {
                    localStorage.setItem(ACCESS_TOKEN_KEY, encryption.encrypt(res.accessToken));
                    localStorage.setItem(PROFILE_KEY, encryption.encrypt(res));
                    return Promise.resolve(true);
                }
                return Promise.reject(new Error("Unauthorized"));
            })
            .catch((err) => {
                throw err;
            });
    },
    async logout() {
        // logout the user on the API
        await api.logout(path.user);
        // clear local storage
        this.logoutClientOnly();
    },
    logoutClientOnly() {
        localStorage.clear();
    },
    updateToken(token) {
        localStorage.setItem(ACCESS_TOKEN_KEY, encryption.encrypt(token));
    },
    getAccessToken: () =>
        encryption.decrypt(localStorage.getItem(ACCESS_TOKEN_KEY)),
    getProfile: () => encryption.decrypt(localStorage.getItem(PROFILE_KEY)),
    getRole() {
        return this.getProfile() && this.getProfile().role;
    },
    isAuthenticated: () => {
        const token = localStorage.getItem(ACCESS_TOKEN_KEY);
        return token !== null && token !== "undefined";
    },
};

export default AuthService
