import "./Card.scss";

export default function Card({ data }) {
  return (
    <figure className="card">
      <img src={data.imageUrl} alt={data.name} />
      <figcaption>{data.name}</figcaption>
    </figure>
  );
}
