import {Button, Link} from "components/base";
import PropTypes from "prop-types";

const Card = ({title, subtitle, image, releasedate, popularity, href, btnText}) => {
  return (
    <div className="card text-bg-dark my-4">
      {image && (
        <div className="card-img-top ">
          <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${image}`} className="w-100" alt={title} />
        </div>
      )}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-subtitle">{subtitle}</div>
        <div className="card-releasedate">Release Date : {releasedate}</div>
        <div className="card-popularity">Popularity : {popularity}</div>

        <Link href={href} target="_blank">
          <Button className="my-2">{btnText}</Button>
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.any,
};

export default Card;
