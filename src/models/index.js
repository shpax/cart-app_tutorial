import request from 'browser-request'
import axios from 'axios'

// import axios from 'axios'

const ORIGIN = '/api'
// --- MODELS ---
export async function getOrdersList(callback) {
  // callbacks
  // request({ url: `${ORIGIN}/cart`, json:true }, (err, res, body) => {
  //   callback(err, body);
  // })

  // promises
  // return axios.get(`${ORIGIN}/cart`).then(({ data }) => data);

  // async/await
  const { data } = await axios.get(`${ORIGIN}/cart`);
  return data;
}

export async function getUserData(callback) {
  // callbacks
  // request({ url: `${ORIGIN}/me`, json:true }, (err, res, body) => {
  //   callback(err, body);
  // })

  // promises
  // return axios.get(`${ORIGIN}/me`).then(({ data }) => data);

  // async/await
  const { data } = await axios.get(`${ORIGIN}/me`);
  return data;
}
// -----------------