import axios from 'axios'

// const apiUrl = 'http://localhost:3000/api/v1';
const apiUrl = 'http://localhost:3000'

const authenticate = async (email, password) => {
    const path = apiUrl + '/auth/sign_in';
    try {
        let response = await axios.post(path, { email: email, password: password })
        sessionStorage.setItem('current_user', JSON.stringify({id: response.data.data.id}));
        await storeAuthHeaders(response)
        return {authenticated: true}
    } catch (error) {
        return {authenticated: false, message: error.response.data.errors[0]}
    }
};


const deAuthenticate = () => {
    const path = apiUrl + '/auth/sign_out';
    return new Promise((resolve, reject) => {
        axios.delete(path, { params: {}, headers: getAuthHeaders() })
            .then(() => {
                sessionStorage.clear();
                resolve()
            })
            .catch(error => {
                console.log(error);
                reject()

            })
    })
};

const storeAuthHeaders = ({ headers }) => {
    return new Promise((resolve) => {
        const uid = headers['uid'],
            client = headers['client'],
            accessToken = headers['access-token'],
            expiry = headers['expiry'];

        sessionStorage.setItem('credentials', JSON.stringify({
            uid: uid,
            client: client,
            access_token: accessToken,
            expiry: expiry,
            token_type: 'Bearer'
        }));

        resolve(true)
    })
};


const getAuthHeaders = () => {
    return JSON.parse(sessionStorage.getItem('credentials'));
};

export { apiUrl, authenticate, deAuthenticate, storeAuthHeaders, getAuthHeaders }
