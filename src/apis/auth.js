import {requests} from "../utils";

const authBaseURL = "authentication";

export const login = async (username, password, requestToken) => {
  return await requests.post(`${authBaseURL}/token/validate_with_login`, {
    username,
    password,
    request_token: requestToken,
  });
};

export const getSessionId = async (requestToken) => {
  return await requests.post(`${authBaseURL}/session/new`, {
    request_token: requestToken,
  });
};

export const getNewRequestToken = async () => {
  return await requests.get(`${authBaseURL}/token/new`);
};
