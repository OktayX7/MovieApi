import {useEffect, useState} from "react";
import {Card} from "components/base";
import {getMovieApi, getPopularMoviesApi} from "apis";
import {useLanguageContext} from "context/LanguageContext";
const PopularMovies = () => {
  const [movie, setMovie] = useState(null);
  const [popularMovies, setPopularMovies] = useState([]);

  const {language} = useLanguageContext();

  useEffect(() => {
    getMovieApi(100).then((response) => {
      if (response) setMovie(response);
    });

    getPopularMoviesApi().then((response) => {
      if (response) setPopularMovies(response?.results);
      console.log(response.results);
    });
  }, [language]);
  return (
    <>
      <section className="container">
        {movie && <span>Movie: {movie?.original_title}</span>}
        {!movie && <span>Movie not found</span>}

        <span>Total Movies Count: {popularMovies.length}</span>

        <div className="row">
          {popularMovies &&
            popularMovies?.map((movie) => (
              <div key={movie.id} className="col-md-3">
                <Card
                  title={movie.title}
                  subtitle={movie.overview.length > 200 ? movie.overview.substring(0, 200) + "..." : movie.overview}
                  image={movie.poster_path}
                  btnText="Detail"
                  href={`/popular/${movie.id}`}
                />
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default PopularMovies;
