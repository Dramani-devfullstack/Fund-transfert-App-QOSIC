import { AuthService } from './AuthService';

const API_KEY = 'Let3sr6cwrkG6yXVQUV7csPh9PvbAEdpk5TH7MJdnGd2KFu9'


export function authHeader() {
    // return authorization header with jwt token
    const currentUser = AuthService.currentUserValue;
    if (currentUser && currentUser.token) {
        return { Authorization: `Bearer  ${API_KEY} ${currentUser.token}` };
    } else {
        return {};
    }
}