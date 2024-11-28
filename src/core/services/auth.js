import axios from 'axios';
const ENDPOINT = 'http://anataarisa.hopto.org:8080/api/v1';

export const signIn = async (username, password) => {
    return await axios.post(
        `${ENDPOINT}/auth/authenticate`,
        {
            username: username,
            password: password
        }
    );
}