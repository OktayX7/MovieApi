import {getRatedMovies, getFavoriteMovies} from "apis";
import {useEffect, useState} from "react";
import {Loading} from "components/base";
import {useLanguageContext} from "context/LanguageContext";
import {useUserContext} from "context/UserContext";
import {LoginForm} from "components/blocks";
const accountId = localStorage.getItem("accountId");
const sessionId = localStorage.getItem("sessionId");

const FavoriteMovies = () => {
  const [ratedMovies, setRatedMovies] = useState(null);
  const [favoriteMovies, setFavoriteMovies] = useState(null);

  const {language} = useLanguageContext();
  const {user} = useUserContext();

  useEffect(() => {
    getRatedMovies(sessionId, accountId).then((response) => {
      setRatedMovies(response.results);
      console.log(response.results);
    });
    getFavoriteMovies(sessionId, accountId).then((response) => {
      setFavoriteMovies(response.results);
      console.log(response.results);
    });
  }, [language]);

  return (
    <>
      {user && (
        <div className="row justify-content-center my-5 container">
          {favoriteMovies &&
            favoriteMovies?.map((movie) => {
              const {rating} = ratedMovies.find((ratedMovie) => ratedMovie.id === movie.id) || {};
              const {overview} = ratedMovies.find((ratedMovie) => ratedMovie.id === movie.id) || {};
              return (
                <div key={movie.id} className="col-6">
                  <div className="card text-bg-secondary mb-3 px-0">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
                          className="img-fluid rounded-start img-thumbnail"
                          alt={movie.title}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{movie.title}</h5>
                          <p className="card-text mt-3">
                            {overview ? overview.substring(0, 200) + "..." : movie.overview.substring(0, 200) + "..."}
                          </p>
                          <p className="card-text">
                            <small className="text-warning fw-bold">
                              <span className="text-white">Release Date :</span> {movie.release_date}
                            </small>
                          </p>

                          <div className="position-absolute bottom-3">
                            <p className="d-inline">
                              <span className="p-2 ms-1 rounded-circle text-bg-info">{rating ? rating : "0"}</span>
                            </p>

                            <p className="d-inline ms-9">
                              Vote Average :
                              <span className="p-2 rounded-circle text-bg-success ms-1 ">{movie.vote_average}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          {!favoriteMovies && <Loading variant="primary" />}
        </div>
      )}
      {!user && <LoginForm />}
    </>
  );
};

export default FavoriteMovies;
