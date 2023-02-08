import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./Gallery.scss";

export default function Gallery({ list }) {
  return (
    <div className="gallery">
      {list.map((item, index) => (
        <Link key={index} to={"/characters/" + item._id}>
          <Card data={item}></Card>
        </Link>
      ))}
    </div>
  );
}
