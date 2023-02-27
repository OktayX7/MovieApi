import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getMovieApi} from "apis";
import {Loading} from "components/base";
import {DetailCard} from "components/base";
import {useLanguageContext} from "context/LanguageContext";

const NowPlayingDetail = () => {
  const {id} = useParams();

  const [movie, setMovie] = useState(null);
  const {language} = useLanguageContext();

  useEffect(() => {
    getMovieApi(id).then((response) => {
      if (response) {
        setMovie(response);
      }
    });
  }, [id, language]);

  return (
    <>
      {movie ? (
        <DetailCard
          title={movie.original_title}
          img={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
          cardText={movie.overview}
          date={movie.release_date}
        />
      ) : (
        <Loading variant="warning" />
      )}
    </>
  );
};

export default NowPlayingDetail;
