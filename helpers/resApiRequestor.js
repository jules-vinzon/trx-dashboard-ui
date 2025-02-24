import axios from 'axios';
const timeout = 30000;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // 'Authorization': authHeader,
};

export function* get(uri) {
    return yield fetch(`${apiUrl}${uri}`, {
        headers: headers,
        method: 'GET',
    });
}

export function* post(uri, data) {
    return yield fetch(`${apiUrl}${uri}`, {
        headers: headers,
        method: 'POST',
        data,
    });
}


export function* fetch(url, options) {
    const result = yield axios.request({
        url,
        baseURL: apiUrl,
        timeout: timeout,
        headers: headers,
        ...options,
    }).then((res) => {
        return res;
    }).catch((error) => {
        console.log('error', error);
        return error
    })
    if (result.status) {
        return result;
    } else {
        if (result.response.status === 401 || result.response.status === 403) {
            yield forbidden();
        } else {
            if (result.response) {
                return result.response;
            }
        }
    }
}

export function* fetchWithForbidden(url, options) {
    const result = yield axios.request({
        ...options,
        url,
        baseURL: apiUrl,
        timeout: timeout,
        onDownloadProgress: progress => {
            console.log(`Download Progress: ${progress.loaded} bytes`);
        }
    }).then((res) => {
        return res;
    }).catch((error) => {
        return error;
    });

    if (result.status) {
        return result;
    } else {
        if (result.response.status === 401) {
            yield forbidden();
        } else {
            if (result.response) {
                return result.response;
            }
        }
    }
}
