import "./cardTesti.scss";

export default function CardTesti({ review, user, order }) {
  return (
    <div className="card-testi" style={{order: order}}>
      <div className="card-testi__review">{review}</div>
      <div className="card-testi__user">
        <div
          className="user__img"
          style={{ backgroundImage: `url(${user.img})` }}
        ></div>
        <div className="user__name">{user.name}</div>
      </div>
    </div>
  );
}
