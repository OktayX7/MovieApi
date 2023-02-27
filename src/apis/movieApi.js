import {requests} from "../utils";

const movieApiBaseURL = "movie";

export const getPopularMoviesApi = () => requests.get(`${movieApiBaseURL}/popular`);

export const getMovieApi = async (id) => requests.get(`${movieApiBaseURL}/${id}`);

export const getNowPlaying = async () => requests.get(`${movieApiBaseURL}/now_playing`);
