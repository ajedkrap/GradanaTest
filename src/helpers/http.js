import axios from 'axios';

export default (token = null, content = '', headers) => {
  if (token !== null) {
    return axios.create({
      timeout: 10000,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type':
          content === 'form' ? 'multipart/form-data' : 'application/json',
        ...headers,
      },
    });
  } else {
    return axios.create({
      timeout: 10000,
      headers: {
        'Content-Type':
          content === 'form' ? 'multipart/form-data' : 'application/json',
        ...headers,
      },
    });
  }
};
