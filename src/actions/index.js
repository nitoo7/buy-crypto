const axios = require('axios');

export function setUserInfo(payload) {
  return {
    type: 'SET_USER_INFO',
    payload: payload
  }
}

