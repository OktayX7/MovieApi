import {requests} from "../utils";

const accountBaseURL = "account";

export const getAccountDetails = async (sessionId) => {
  return await requests.get(`${accountBaseURL}`, {session_id: sessionId});
};

// Kullanılmadı.
export const getFavoriteMovies = async (sessionId, accountId) => {
  return await requests.get(`${accountBaseURL}/${accountId}/favorite/movies`, {session_id: sessionId});
};

export const getFavoriteTvShows = async (sessionId, accountId) => {
  return await requests.get(`${accountBaseURL}/${accountId}/favorite/tv`, {session_id: sessionId});
};

export const getRatedMovies = async (sessionId, accountId) => {
  return await requests.get(`${accountBaseURL}/${accountId}/rated/movies`, {session_id: sessionId});
};
// Kullanılmadı.
export const getRatedTvShows = async (sessionId, accountId) => {
  return await requests.get(`${accountBaseURL}/${accountId}/rated/tv`, {session_id: sessionId});
};

export const getWatchlistMovies = async (sessionId, accountId) => {
  return await requests.get(`${accountBaseURL}/${accountId}/watchlist/movies`, {session_id: sessionId});
};
