"use strict";

var poppin = {};

poppin.server = {
  baseUrl: 'http://localhost/',
  axios: undefined
};

poppin.auth = {
  setToken: (token) => {
    poppin.axios().defaults.headers.common['Authorization'] = 'Bearer ' + token;
  }
};

poppin.axios = () => (
  poppin.server.axios || axios.create({
    baseUrl: poppin.server.baseUrl,
    timeout: 1500
  })
);

window.poppin = poppin;
