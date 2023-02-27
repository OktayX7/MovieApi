import {getFavoriteTvShows} from "apis";
import {useEffect, useState} from "react";
import {useLanguageContext} from "context/LanguageContext";
import {useUserContext} from "context/UserContext";
import {LoginForm} from "components/blocks";
import {Loading} from "components/base";
const accountId = localStorage.getItem("accountId");
const sessionId = localStorage.getItem("sessionId");

const FavoriteTvShows = () => {
  const [favTvShows, setFavTvShows] = useState(null);

  const {language} = useLanguageContext();
  const {user} = useUserContext();

  useEffect(() => {
    getFavoriteTvShows(sessionId, accountId).then((res) => {
      setFavTvShows(res.results);
      console.log(res.results);
    });
  }, [language]);

  return (
    <>
      {user && (
        <div className="row gap-4 justify-content-center container my-5">
          {favTvShows &&
            favTvShows?.map((movie) => (
              <div key={movie.id} className=" offset-1 col-5 row border ps-0 rounded-3">
                <div className="col-4 px-0">
                  <img
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
                    alt={movie.title}
                    className="img-thumbnail h-100"
                  />
                </div>
                <div className="offset-1 col-7 my-3">
                  <h2>{movie.title}</h2>
                  <p className="mt-4">
                    {movie.overview
                      ? movie.overview.substring(0, 200) + "..."
                      : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique natus quisquam officia eius laudantium, esse quaerat consequatur consectetur! Magni sunt minus alias assumenda dicta esse fugit debitis exercitationem vero aut!"}
                  </p>
                </div>
              </div>
            ))}
          {!favTvShows && <Loading />}
        </div>
      )}
      {!user && <LoginForm />}
    </>
  );
};

export default FavoriteTvShows;
