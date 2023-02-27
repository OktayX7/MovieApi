import {getWatchlistMovies} from "apis";
import {useEffect, useState} from "react";
import {useLanguageContext} from "context/LanguageContext";
import {useUserContext} from "context/UserContext";
import {LoginForm} from "components/blocks";
import {Loading} from "components/base";
const accountId = localStorage.getItem("accountId");
const sessionId = localStorage.getItem("sessionId");

const WatchListMovies = () => {
  const [watchListMovies, setWatchListMovies] = useState(null);

  const {language} = useLanguageContext();
  const {user} = useUserContext();

  useEffect(() => {
    getWatchlistMovies(sessionId, accountId).then((res) => {
      setWatchListMovies(res.results);
      console.log(res.results);
    });
  }, [language]);

  return (
    <>
      {user && (
        <div className="row justify-content-center my-5 container">
          {watchListMovies &&
            watchListMovies?.map((movie) => (
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
                        <p className="card-text mt-3">{movie.overview.substring(0, 200) + "..."}</p>
                        <p className="card-text">
                          <small className="text-warning fw-bold">
                            <span className="text-white">Release Date :</span> {movie.release_date}
                          </small>
                        </p>

                        <div className="position-absolute bottom-3">
                          <p className="d-inline">
                            Vote Count : <span className="p-2 rounded-circle text-bg-info">{movie.vote_count}</span>
                          </p>

                          <p className="d-inline ms-5">
                            Vote Average :
                            <span className="p-2 rounded-circle text-bg-success ms-1 ">{movie.vote_average}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {!watchListMovies && <Loading variant="primary" />}
        </div>
      )}
      {!user && <LoginForm />}
    </>
  );
};

export default WatchListMovies;
