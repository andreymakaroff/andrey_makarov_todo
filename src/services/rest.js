const BASE_URL = 'http://localhost:8081/';

export const request = (url, method = 'GET', body, options) => fetch(`${BASE_URL}${url}`, {
  method,
  credentials: 'include',
  body: JSON.stringify(body),
  ...options
})
  .then(data => data.json());

export const rest = {
  get(url) {
    return request(url);
  },

  post(url, body) {
    const options = {
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      }
    };
    return request(url, 'POST', body, options);
  },

  put(url, body) {
    const options = {
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      }
    };
    return request(url, 'PUT', body, options);
  },

  delete(url) {
    return request(url, 'DELETE');
  }
};
