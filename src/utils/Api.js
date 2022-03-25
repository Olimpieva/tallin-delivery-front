import { MAIN_URL } from "./constants";

class MainApi {
    constructor(options) {
        this._url = options.url;
    }

    async _sendRequest(path, requestOptions) {
        let data;
        try {
            const response = await fetch(`${this._url}/${path}`, { ...requestOptions });

            if (!response.ok) {
                throw response;
            }

            // data = await response.json();
            data = await response.text();
        } catch (error) {
            throw error;
        }
        return data;
    }

    login({ username, password }) {

        return this._sendRequest(`login/student`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            })
        });
    };

};

const api = new MainApi({ url: MAIN_URL });

export default api;