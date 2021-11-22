import axios from 'axios';

const API_URI =
  'https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge';

/*
 * Fetch data from Page Content API
 */
const getData = () => {
  return axios
    .get(API_URI)
    .then(res => {
      console.log(res.data);
      return res;
    })
    .catch(err => console.log(err));
};

const postData = (data) => {
  return axios
    .post(API_URI, data)
    .then(res => {
      console.log(res.data);
      return res;
    })
    .catch(err => console.log(err));
};

export const apiProvider = {
  getData,
  postData,
};
