import {useEffect, useState} from "react";
import {Card} from "components/base";
import {getNowPlaying} from "apis";
import {useLanguageContext} from "context/LanguageContext";

const NowPlaying = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const {language} = useLanguageContext();

  useEffect(() => {
    getNowPlaying().then((response) => {
      console.log(response);
      if (response) setNowPlayingMovies(response?.results);
    });
  }, [language]);

  return (
    <>
      <section className="container">
        <div className="row">
          {nowPlayingMovies?.length &&
            nowPlayingMovies?.map((movie) => (
              <div key={movie.id} className="col-md-3">
                <Card
                  title={movie.original_title}
                  releasedate={movie.release_date}
                  popularity={movie.popularity}
                  image={movie.poster_path}
                  btnText="Detail"
                  href={`/now-playing/${movie.id}`}
                />
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default NowPlaying;
