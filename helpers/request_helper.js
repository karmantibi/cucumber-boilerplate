const axios = require('axios');
const assert = require('assert');

const responseList = [];

const get = async (url, params = {}, headers = {}) => {
    const config = {
        headers: headers,
        params: params,
    };

    return axios.get(url, config).then((response) => {
        responseList.push(response);
        assert.ok(response.status === 200, `Response status should be 200, but: ${response.status}`);
        assert.ok(response.statusText === 'OK', `Response status should be OK, but: ${response.statusText}`);
        return response;
    });

}

exports.get = get;
exports.responseList = responseList;