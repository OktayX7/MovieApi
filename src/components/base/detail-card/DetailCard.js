const DetailCard = ({img, title, cardText, date}) => {
  return (
    <div className="row w-50 mx-auto text-bg-secondary rounded-3 mb-4">
      <div className="col-4 ps-0">
        <img src={img} alt={title} className="img-thumbnail" />
      </div>
      <div className="offset-1 col-7 my-4">
        <h3>{title}</h3>
        <p>{cardText}</p>
        <p className="ms-auto">{date}</p>
      </div>
    </div>
  );
};

export default DetailCard;
